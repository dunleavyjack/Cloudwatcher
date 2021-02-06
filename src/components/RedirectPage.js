import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';
export default class RedirectPage extends React.Component {
    componentDidMount() {
        const { setExpirationTime, history, location } = this.props;
        try {
            if (_.isEmpty(location.hash)) {
                return history.push('/dashboard');
            }
            const access_token = getParamValues(location.hash);
            const expirationTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiration_time', expirationTime);
            history.push('./dashboard');
        } catch (error) {
            history.push('/');
        }
    }
    render() {
        return null;
    }
}