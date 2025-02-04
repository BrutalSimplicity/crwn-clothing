import React from 'react'
import PropTypes from 'prop-types'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss';

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...others }) => (
            <CollectionItem key={id} {...others} />
          ))
        }
      </div>
    </div>
  )
}

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default CollectionPreview

