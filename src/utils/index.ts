import { PrizeSet } from '../store/models/tasks'
import { Filter, FilterParams } from '../store/models/filter'

/**
 * Returns the price amount for each task from the prize sets
 * @param priceSets
 */
export const getTaskPrice = (priceSets: PrizeSet[] = []) => {
  let priceAmount = 0
  for (let i = 0; i < priceSets.length; i++) {
    const price = priceSets[i]
    if (price.type === 'placement') {
      const value = price.prizes[0] && price.prizes[0].value
      priceAmount = value || 0
      break
    }
    continue
  }

  return `$${priceAmount}`
}

/**
 * Prepares the filter params
 * @param state the state of the filter
 */
export const getFilterParams = (state: Filter) => {
  const { selectedGroups, techStack } = state
  const filterParams = {} as FilterParams
  if (selectedGroups) {
    filterParams.groups = selectedGroups
  }

  if (techStack.length > 0) {
    filterParams.tags = techStack
  }

  return filterParams
}
