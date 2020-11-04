import React from 'react'
import Chip from '@material-ui/core/Chip'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import CloseArrowIcon from '../../assets/arrow-left.svg'
import CrossIcon from '../../assets/cross.svg'
import { getGroups } from '../../services/filter'
import { getTechnologies } from '../../services/technologies'
import { useStyles } from './styles'
import { useAuthStore } from '../../store/hooks/use-auth'
import { useFilterStore } from '../../store/hooks/use-filter'
import { useDispatch } from 'react-redux'
import { filterActions } from '../../store/reducers/filter'
import { errorActions } from '../../store/reducers/error'
import { Button } from '@material-ui/core'
import { getFilterParams } from '../../utils'
import { tasksActions } from '../../store/reducers/tasks'
import { getTasks } from '../../services/tasks'
import { Config } from '../../config'

interface FilterProps {
  onCloseFilter: () => void;
  onFilterApplied?: () => void;
  closeIconType: 'close' | 'arrow';
}

/**
 * Filter component which contains filter on tech stack and groups
 * @param FilterProps
 */
export const Filter = ({ closeIconType, onCloseFilter, onFilterApplied }: FilterProps) => {
  const styles = useStyles()
  const auth = useAuthStore()
  const dispatch = useDispatch()
  const filterState = useFilterStore()
  const [isShowAll, setShowAll] = React.useState<boolean>(false)

  const removeTechStack = (key: number) => {
    dispatch(filterActions.setInfo({
      techStack: filterState.techStack.filter((item, index) => index !== key)
    }))
  }

  const getAllGroups = async (perPage: number) => {
    if (!auth || !auth.isLoggedIn || auth.checkingForToken) return
    getGroups({
      perPage
    })
      .then((res: any) => {
        const total = parseInt(res.headers['x-total'], 10)
        dispatch(filterActions.setInfo({
          groups: res.data,
          groupTotalCount: total
        }))
        setShowAll(res.data.length >= perPage ? total > res.data.length : false)
      })
      .catch((response) => {
        dispatch(errorActions.setInfo({
          showError: true,
          message: response.message
        }))
      })
  }

  const getAllTechnologies = async () => {
    getTechnologies()
      .then((res: any) => {
        dispatch(filterActions.setInfo({
          technologies: res.data.result.content
            .filter(tech => (tech.status && tech.status.description === 'Active'))
            .map(tech => tech.name)
            .sort((a, b) => a.localeCompare(b))
        }))
      })
      .catch((response) => {
        dispatch(errorActions.setInfo({
          showError: true,
          message: response.message
        }))
      })
  }

  React.useEffect(() => {
    getAllGroups(Config.GROUPS_COUNT)
    getAllTechnologies()
  }, [auth])

  const onGroupChecked = (event: any) => {
    if (event.target.checked) {
      dispatch(filterActions.addGroup({ groupId: event.target.value }))
    } else {
      dispatch(filterActions.removeGroup({ groupId: event.target.value }))
    }
  }

  const onShowAll = () => {
    getAllGroups(filterState.groupTotalCount)
  }

  const onApplyFilter = () => {
    const params = getFilterParams(filterState)
    dispatch(tasksActions.setInfo({
      list: [],
      page: 1,
      loading: true
    }))

    // Always gets the first page
    getTasks(1, params)
      .then((res: any) => {
        const totalChallenges = res.headers['x-total']
        dispatch(tasksActions.setInfo({
          list: res.data,
          showLoadMore: 1 * Config.PER_PAGE < totalChallenges
        }))
      })
      .catch((response: any) => {
        dispatch(errorActions.setInfo({
          showError: true,
          message: response.message
        }))
      })
      .finally(() => {
        dispatch(tasksActions.setInfo({
          loading: false
        }))
      })

    // once filter is applied the modal has to be closed
    // if it is mobile
    if (onFilterApplied) {
      onFilterApplied()
    }
  }

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Filter</div>
        <img
          className={styles.closeIcon}
          onClick={onCloseFilter}
          src={closeIconType === 'close' ? CrossIcon : CloseArrowIcon }
          alt="filter close icon"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.techStackWrapper}>
          <div className={styles.techStackLabel}>Tech Stack</div>
          <div className={styles.chips}>
            <Autocomplete
              multiple
              options={filterState.technologies}
              getOptionLabel={option => (option)}
              onChange={(event, values) => {
                const { techStack: currentTechStack } = filterState
                const filtered = values.filter(value => currentTechStack.concat(filterState.technologies).includes(value))
                dispatch(filterActions.setInfo({
                  techStack: filtered
                }))
              }}
              value={filterState.techStack}
              classes={{
                inputRoot: styles.techStackChipInput,
                option: styles.techStackOption,
                listbox: styles.techStackListBox
              }}
              filterSelectedOptions
              autoHighlight
              autoSelect
              autoComplete
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={option}
                    label={option}
                    classes={{
                      root: styles.eachChip,
                      label: styles.chipLabel
                    }}
                    onMouseDown={(event) => {
                      event.stopPropagation()
                    }}
                    onDelete={() => removeTechStack(index)}
                    className={styles.chip}
                    deleteIcon={<img className={styles.deleteIcon} src={CrossIcon} alt="Tech stack delete icon" />}
                  />
                ))
              }
              renderInput={params => (
                <TextField
                  {...params}
                />
              )}
              renderOption={(option, state) => {
                if (state.inputValue.length === 0) {
                  return option
                }
                const result = option.replace(new RegExp(`(${state.inputValue})`, 'gi'), '<strong>$1</strong>')
                return (
                  <React.Fragment>
                    <span dangerouslySetInnerHTML={{ __html: result }}></span>
                  </React.Fragment>
                )
              }}
            />
          </div>
        </div>
        {
          auth && auth.isLoggedIn && (
            <div className={styles.groupWrapper}>
              <div className={styles.groupLabel}>Groups</div>
              <div className={styles.groupsList}>
                <FormGroup>
                  {
                    filterState.groups.map((group) => (
                      <FormControlLabel
                        key={group.id}
                        value={group.id}
                        control={<Checkbox color="primary" />}
                        onChange={onGroupChecked}
                        label={group.name}
                      />
                    ))
                  }
                </FormGroup>
              </div>
              {
                isShowAll && (
                  <Button
                    onClick={onShowAll}
                    classes={{
                      root: styles.showAllButton,
                      label: styles.showAllLabel
                    }}>Show All</Button>
                )
              }
            </div>
          )
        }
      </div>
      <div className={styles.footer}>
        <Button
          className={styles.applyFilterButton}
          variant="contained"
          color="primary"
          onClick={onApplyFilter}
        >
            Apply Filter
        </Button>
      </div>
    </div>
  )
}
