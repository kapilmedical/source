import React from "react"
import Link from 'gatsby-link'
import Nav from '../ui/nav'
import Grid from '../ui/grid'
import Hexagon from '../ui/hexagon'

const Footer = () => (
  <footer className='Footer u-wrapper'>
    <div className='HiddenAtSm'>
      <Hexagon width={18} fill='#05a5b4' position={{bottom: '90px', left: '-40px'}} />
      <Hexagon width={48} fill='#b4f1d9' position={{bottom: '90px', right: '15%'}} />
      <Hexagon width={78} fill='#b4f1d9' position={{bottom: '-20px', left: '20%'}} opacity='.5' />
      <Hexagon width={32} fill='#b4f1d9' position={{top: '40px', right: '-5%'}} />
      <Hexagon width={32} fill='#05a5b4' position={{bottom: '-20px', right: '-8%'}} />
    </div>

    <div className='Copyrights'>&copy; 2018 by Kapil Medial. All rights reserved.</div>

    <style jsx>{`
      .Footer {
        max-width: 880px;
        margin-top: 30px;
        padding-bottom: 30px;
        position: relative;
      }
      @media screen and (min-width: 560px) {
        .Footer {
          margin-top: 60px;
          padding-bottom: 60px;
        }
      }
      @media screen and (min-width: 960px) {
        .Footer {
          margin-top: 90px;
        }
      }
      .Navigation {
        justify-content: space-between;
      }
      .Navigation__column {
        margin-bottom: 30px;
        flex: 1;
      }
      .Navigation__column--split :global(ul) {
        width: 230px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .Navigation__column--split :global(li) {
        flex-basis: 50%;
      }
      @media screen and (max-width: 460px) {
        .Navigation__resources {
          order: 2;
        }
        .Navigation__column.Navigation__column--split {
          flex: 1 1 100%;
        }
        .Navigation__column--split :global(ul) {
          width: 108%;
        }
      }
      .Navigation__head {
        color: #2f3339;
        font-weight: 500;
        line-height: 36px;
        font-size: 16px;
      }
      .Navigation__link {
        text-decoration: none;
        line-height: 28px;
        color: #7a7f87;
      }
      .Navigation__link:hover {
        text-decoration: underline;
      }
      .Copyrights {
        text-align: center;
        margin-top: 30px;
        color: rgba(141, 146, 153, .5);
      }
      @media screen and (max-width: 960px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </footer>
)

export default Footer
