import Layout from '../components/Layout';
import React, { Component } from 'react';
import Card from '../components/Card';

export default class Project extends Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Wisata Foodie',
        deskripsi: 'Website to find halal and non-halal food.Has many features like login, register, create restaurant, rating, comment, map, favorite and admin features to verify.',
        image: 'https://user-images.githubusercontent.com/105417100/182867809-3531b0dd-9736-47e2-b77e-c78241b5796c.png',
        link: 'https://wisata-foodie.vercel.app/',
      },

      {
        id: 3,
        title: 'Daftar Karyawan',
        deskripsi: 'Website list of karyawan with feature searh and using API random user.',
        image: 'https://user-images.githubusercontent.com/105417100/182610109-f64f2c5d-458d-4cbe-a884-6340f31a76ef.png',
        link: 'https://daftar-karyawan-api.vercel.app/',
      },
      {
        id: 4,
        title: 'To Do CRUD',
        deskripsi: 'Making a simple todo list application to make daily notes easier. Has many features like  add todo, edit todo, delete todo. This web creation uses ReactJS and TailwindCSS.',
        image: 'https://user-images.githubusercontent.com/105417100/182870138-29a1480f-d63d-4d42-b04e-57a2213c1f3c.jpeg',
        link: 'https://to-do-list-app-henna-xi.vercel.app/',
      },
      {
        id: 5,
        title: 'Movies',
        deskripsi:
          'Making a simple movie website that contains movies and their ratings. On the web that is created contains the home page, details, favorites and search. This web creation uses ReactJS and Tailwind. For API used from TMDB website.',
        image: 'https://user-images.githubusercontent.com/105417100/182868064-e4ab6566-6412-49b5-837d-054d5d609241.jpeg',
        link: 'https://mymovies-app-react-two.vercel.app/',
      },
    ],
  };

  render() {
    return (
      <Layout>
        <h2 className="text-3xl text-center py-2  bg-[#0a192f] text-white ">Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
          {this.state.data.map((item) => (
            <Card key={item.id} title={item.title} deskripsi={item.deskripsi} link={item.link} image={item.image} />
          ))}
        </div>
      </Layout>
    );
  }
}
