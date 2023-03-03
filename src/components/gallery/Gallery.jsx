import React, { useState } from 'react';
import logo_1 from '../../assets/img/works/logos/logo_1.jpg';
import logo_2 from '../../assets/img/works/logos/logo_2.jpg';
import logo_3 from '../../assets/img/works/logos/logo_3.jpg';
import logo_4 from '../../assets/img/works/logos/logo_4.jpg';
import logo_5 from '../../assets/img/works/logos/logo_5.jpg';
import logo_6 from '../../assets/img/works/logos/logo_6.jpg';
import logo_7 from '../../assets/img/works/logos/logo_7.jpg';
import logo_8 from '../../assets/img/works/logos/logo_8.jpg';
import logo_9 from '../../assets/img/works/logos/logo_9.jpg';
import logo_10 from '../../assets/img/works/logos/logo_10.jpg';
import logo_11 from '../../assets/img/works/logos/logo_11.jpg';
import logo_12 from '../../assets/img/works/logos/logo_12.jpg';
import logo_13 from '../../assets/img/works/logos/logo_13.jpg';
import logo_14 from '../../assets/img/works/logos/logo_14.jpg';
import logo_15 from '../../assets/img/works/logos/logo_15.jpg';
import logo_16 from '../../assets/img/works/logos/logo_16.jpg';
import logo_17 from '../../assets/img/works/logos/logo_17.jpg';
import logo_18 from '../../assets/img/works/logos/logo_18.jpg';
import logo_19 from '../../assets/img/works/logos/logo_19.jpg';
import logo_20 from '../../assets/img/works/logos/logo_20.jpg';
import logo_21 from '../../assets/img/works/logos/logo_21.jpg';
import logo_22 from '../../assets/img/works/logos/logo_22.jpg';
import logo_23 from '../../assets/img/works/logos/logo_23.jpg';
import logo_24 from '../../assets/img/works/logos/logo_24.jpg';

import web_1 from '../../assets/img/works/webs/web_1.jpg';
import web_2 from '../../assets/img/works/webs/web_2.jpg';
import web_3 from '../../assets/img/works/webs/web_3.jpg';

import app_1 from '../../assets/img/works/apps/app_1.png';
import app_2 from '../../assets/img/works/apps/app_2.png';
import app_3 from '../../assets/img/works/apps/app_3.png';
import app_4 from '../../assets/img/works/apps/app_4.png';
import app_5 from '../../assets/img/works/apps/app_5.png';
import app_6 from '../../assets/img/works/apps/app_6.png';


const logos = [
  {logo:logo_1 },
  {logo:logo_2 },
  {logo:logo_3 },
  {logo:logo_4 },
  {logo:logo_5 },
  {logo:logo_6 },
  {logo:logo_7 },
  {logo:logo_8 },
  {logo:logo_9 },
  {logo:logo_10},
  {logo:logo_11},
  {logo:logo_12},
  {logo:logo_13},
  {logo:logo_14},
  {logo:logo_15},
  {logo:logo_16},
  {logo:logo_17},
  {logo:logo_18},
  {logo:logo_19},
  {logo:logo_20},
  {logo:logo_21},
  {logo:logo_22},
  {logo:logo_23},
  {logo:logo_24},
];

const webs = [
  {web:web_1 },
  {web:web_2 },
  {web:web_3 },
];

const apps = [
  {app:app_1 },
  {app:app_2 },
  {app:app_3 },
  {app:app_4 },
  {app:app_5 },
  {app:app_6 },
];

export default function Photogallery({gallery}) {
  return (
    <>
      {
      
      gallery == 0 ?
      
      logos ? logos.map((logo, i) => {
        return (
          <div key={i} className='col-10 col-md-4 col-lg-3 mb-4 img-filter mx-auto'>
            <img src={logo.logo} alt="Image Gallery" className='w-100' />
          </div>
        )
      }):"" : 

      gallery == 1 ?
      
      webs ? webs.map((web, i) => {
        return (
          <div key={i} className='col-10 col-md-4 col-lg-4 mb-4 img-filter mx-auto'>
            <img src={web.web} alt="Image Gallery" className='w-100' />
          </div>
        )
      }):"" :      
      
      apps ? apps.map((app, i) => {
        return (
          <div key={i} className='col-10 col-md-4 col-lg-4 mb-4 img-filter mx-auto'>
            <img src={app.app} alt="Image Gallery" className='w-100' />
          </div>
        )
      }):""
      
      }
    </>
  );
}