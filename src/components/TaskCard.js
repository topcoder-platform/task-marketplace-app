import React from 'react'

function renderTags (tags) {
  if (!tags) return <div />
  return tags.map((tag) => <div className="ui label" key={tag}>{tag}</div>)
}

function renderPrizes (prizes) {
  if (!prizes) return

  const prize = prizes[0].prizes[0]
  let sign
  switch (prize.type) {
    case 'USD': sign = 'dollar'; break
    case 'EU': sign = 'euro'; break
    default: sign = 'pound'
  }

  return (
    <div className="ui blue label">
      <i className={ `${sign} sign icon` }>{ prize.value }</i>
    </div>
  )
}

function getShortDescription (description, format) {
  if (format === 'HTML') {
    return description
      .replace(/(<([^>]+)>)/gi, '')
      .substring(0, 140)
  }
}

export default ({ task }) => (
  <div className="ui card" key={ task.id }>
    <div className="content">
      <div className="meta">
        Status: { task.status }
      </div>
      <div className="meta">
        <div className="ui blue labels">
          { renderTags(task.tags) }
        </div>
        <div className="description">
          { getShortDescription(task.description, task.descriptionFormat) }
        </div>
        <div className="ui labels">
          <b>Prizes:</b>{ renderPrizes(task.prizeSets) }
        </div>
      </div>
    </div>
  </div>
)
