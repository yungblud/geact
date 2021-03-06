import React from 'react'
import classnames from 'classnames/bind'
import styles from './Title.scss'
import Button from 'components/common/Button'

const cx = classnames.bind(styles)

const Title = ({ title, linkToMore, category }) => {
    const link = () => {
        linkToMore({ category })
    }
    return (
        <div className={cx('Title')}>
            <div className={cx('Name')}>{title}</div>
            <div className={cx('More')}>
                <Button theme="outline" onClick={link}>
                    More
                </Button>
            </div>
        </div>
    )
}

export default Title
