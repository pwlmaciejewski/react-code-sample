import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SignIn from '../Auth/SignIn';
import Layout from './Layout';

injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <SignIn />
        </Layout>
      </MuiThemeProvider>
    );
  }
}
