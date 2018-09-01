import React from 'react'
import appStore from './../stores/appStore'


export default () => {
    return (
        <div className="loading">
            {appStore.loadingText}
        </div>
    )
}