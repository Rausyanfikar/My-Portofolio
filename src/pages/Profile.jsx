import React, { Component } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Skills } from '../components/Skills';

export default class Profile extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Skills />
      </Layout>
    );
  }
}
