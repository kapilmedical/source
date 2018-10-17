import React from "react"
import AutomationSDKIcon from './icon-automation-sdk.svg'
import CommunityIcon from './icon-community.svg'
import SocketRegistryIcon from './icon-socket-registry.svg'
import CloudOSIcon from './icon-cloud-os.svg'
import Hexagon from '../ui/hexagon'
import Grid from '../ui/grid'

const Features = () => (
  <div className='Section u-wrapper'>
    <Hexagon width={32} fill='#05A5B4' position={{top: '20px', right: '-20px'}} />

    <div className='Section__header text-center'>
      <h2 className='u-title'>Never miss taking your medication</h2>
      <p className='u-subtitle'>
        No more running from one chemist store to another when in need of medicines, We will deliver at your doorstep and refill your medicines before you run out of them.
      </p>
    </div>

    <div className='Section__content'>
      <Grid wrap>
        <div className='Heading'>
          <p className='Heading__item Heading__item--important'>
            Accurate medication.<br/> Higher savings.
          </p>
          <p className='Heading__item'>
            Kapil Medial's 4-fold assurance for medicine delivery : convenience, cost-effectiveness, accuracy and promptness.
          </p>
        </div>
        <div className='Feature-list'>
          <div className='Feature'>
            <div className='Feature__inner'>
              <div className='Feature__icon'>
                <SocketRegistryIcon />
              </div>
              <h4 className='Feature__title'>Never run out of medication</h4>
              <p>
                Get timely refills with our monthly plans
              </p>
            </div>
          </div>
          <div className='Feature'>
            <div className='Feature__inner'>
              <div className='Feature__icon'>
                <AutomationSDKIcon />
              </div>
              <h4 className='Feature__title'>Save on every dose</h4>
              <p>
                Flat 15% off on your medication direcly goes to your pocket irecly goes to your pocket
              </p>
            </div>
          </div>
          <div className='Feature'>
            <div className='Feature__inner'>
              <div className='Feature__icon'>
                <CommunityIcon />
              </div>
              <h4 className='Feature__title'>Get exact medication</h4>
              <p>
                100% availability of the medicines your doctor has prescribed
              </p>
            </div>
          </div>
          <div className='Feature'>
            <div className='Feature__inner'>
              <div className='Feature__icon'>
                <CloudOSIcon />
              </div>
              <h4 className='Feature__title'>Timely doorstep delivery</h4>
              <p>
                Why step out? Get prompt delivery of medicines at home.
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        margin-top: 30px;
        margin-bottom: 30px;
        max-width: 1080px;
        position: relative;
        z-index: 1;
      }
      .u-title {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
      .u-subtitle {
        max-width: 820px;
        margin-left: auto;
        margin-right: auto;
      }
      .Section__content {
        justify-content: space-between;
      }
      .Section__header {
        margin-top: 30px;
        margin-bottom: 30px;
      }
      @media screen and (min-width: 560px) {
        .Section {
          margin-top: 90px;
          margin-bottom: 90px;
        }
        .Section__content {
          justify-content: space-between;
        }
        .Section__header {
          margin-top: 90px;
          margin-bottom: 90px;
        }
      }
      @media screen and (min-width: 1080px) {
        .Section {
          margin-top: 140px;
          margin-bottom: 140px;
        }
      }
      /* = HEADING
       * ==================================================================== */
      .Heading {
        color: #8d9299;
        font-size: 18px;
        line-height: 30px;
      }
      @media screen and (min-width: 520px) and (max-width: 1099px) {
        .Heading {
          display: flex;
          margin-left: -30px;
        }
        .Heading__item {
          width: 50%;
          padding-left: 30px;
        }
      }
      @media screen and (min-width: 1100px) {
        .Heading {
          width: 420px;
        }
      }
      .Heading__item {
        margin-bottom: 30px;
      }
      .Heading__item--important {
        font-size: 28px;
        line-height: 36px;
        color: #0b0d11;
        font-weight: 300;
      }
      /* = FEATURE
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }
      .Feature {
        width: 100%;
        display: inline-block;
        vertical-align: top;
      }
      .Feature:hover {
        text-decoration: none;
      }
      .Feature__inner {
        cursor: pointer;
        padding: 30px;
        color: rgba(255,255,255, .5);
        line-height: 24px;
        transition: all 0.2s cubic-bezier(0.94, 0.40, 0.62, 0.93);
        position: relative;
      }
      .Feature:nth-child(1) .Feature__inner {
        background-color: #3637d1;
        box-shadow: 0 10px 20px 0 rgba(54, 54, 209, 0.25);
      }
      .Feature:nth-child(2) .Feature__inner {
        background-color: #12a5b4;
        box-shadow: 0 10px 20px 0 rgba(25, 165, 179, 0.25);
      }
      .Feature:nth-child(3) .Feature__inner {
        background-color: #703ada;
        box-shadow: 0 10px 20px 0 rgba(112, 57, 218, 0.25);
      }
      .Feature:nth-child(4) .Feature__inner {
        background-color: #187eef;
        box-shadow: 0 10px 20px 0 rgba(24, 126, 239, 0.25);
      }
      .Feature__icon {
        opacity: .5;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 10px;
      }
      .Feature__title {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 18px;
        line-height: 30px;
        font-weight: normal;
        margin-left: 20px;
        margin-bottom: 10px;
      }
      @media screen and (max-width: 519px) {
        .Feature-list {
          margin-left: -30px;
          margin-right: -30px;
        }
      }
      @media screen and (min-width: 520px) {
        .Feature-list {
          margin-left: -30px;
        }
        .Feature {
          max-width: 50%;
          padding-left: 30px;
          margin-bottom: 30px;
        }
        .Feature__inner {
          border-radius: 6px;
        }
        .Feature__icon {
          margin-bottom: 0;
          display: block;
        }
        .Feature__title {
          margin-left: 0;
          display: block;
        }
      }
      @media screen and (min-width: 1100px) {
        .Feature-list {
          width: 630px;
          margin-left: auto;
        }
        .Feature {
          max-width: 300px;
          float: none;
        }
      }
      @media screen and (min-width: 918px) {
        .Feature:nth-child(1),
        .Feature:nth-child(3) {
          float: left;
        }
        .Feature:nth-child(2),
        .Feature:nth-child(4) {
          float: right;
        }
        .Feature__inner::before {
          transition: all 0.2s cubic-bezier(0.94, 0.40, 0.62, 0.93);
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 6px;
          background: inherit;
          z-index: -1;
        }
        .Feature__inner:hover::before {
          transform: scale(1.1);
        }
        .Feature__inner:hover {
          transform: translateY(-5px);
        }
        .Feature__inner:hover::before {
          box-shadow: inherit;
          transform: scale(1.1);
        }
      }
    `}</style>
  </div>
)

export default Features
