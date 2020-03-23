import React from 'react'
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component'; 

import './collection.styles.scss'
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection, match }) => {
    console.log(collection);
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map((item, id) => <CollectionItem key={id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
