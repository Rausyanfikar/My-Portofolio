import Layout from '../components/Layout';
import React, { Component } from 'react';
import Card from '../components/Card';
import karyawan from '../assets/karyawan.jpg';

export default class HomePage extends Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Wisata Foodie',
        deskripsi: 'Aplikasi untuk menemukan makanan halal dan non halal',
        image: 'https://anggakswr.github.io/img/recent-works/manulife.jpg',
      },
      {
        id: 2,
        title: 'E-commerce',
        deskripsi: 'deskripsi',
        image: 'https://anggakswr.github.io/img/recent-works/manulife.jpg',
      },
      {
        id: 3,
        title: 'Daftar Karyawan',
        deskripsi: 'deskripsi',
        image: 'https://daftar-karyawan-api.vercel.app',
      },
      {
        id: 4,
        title: 'To Do CRUD',
        deskripsi: 'deskripsi',
        image: 'https://anggakswr.github.io/img/recent-works/manulife.jpg',
      },
      {
        id: 5,
        title: 'Pokemon',
        deskripsi: 'deskripsi',
        image: 'https://anggakswr.github.io/img/recent-works/manulife.jpg',
      },
    ],
  };

  render() {
    return (
      <Layout>
        <h2 className="text-3xl text-center py-2 mb-5">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
          {this.state.data.map((item) => (
            <Card key={item.id} title={item.title} deskripsi={item.deskripsi} image={item.image} />
          ))}
        </div>
      </Layout>
    );
  }
}
