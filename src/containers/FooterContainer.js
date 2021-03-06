import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { authActions } from 'store/modules/auth'
import Footer from 'components/common/Footer'
import { baseActions } from '../store/modules/base'

class FooterContainer extends Component {
    logout = async () => {
        const { AuthActions } = this.props
        try {
            await AuthActions.logout()
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
            this.props.history.push('/login')
        } catch (e) {
            console.log(e)
        }
    }

    link = ({ path }) => {
        this.props.history.push(path)
    }

    openSearchModal = () => {
        this.props.BaseActions.openModal({ modalname: 'search' })
    }

    render() {
        return (
            <Footer
                logout={this.logout}
                link={this.link}
                openSearchModal={this.openSearchModal}
            />
        )
    }
}

export default withRouter(
    connect(
        () => ({}),
        dispatch => ({
            AuthActions: bindActionCreators(authActions, dispatch),
            BaseActions: bindActionCreators(baseActions, dispatch),
        })
    )(FooterContainer)
)
