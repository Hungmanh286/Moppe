import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                {/* Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. */}
                CLOTHER SHOP
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Men's Clothing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Wowman's Clothing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Unisex Clothing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  {/* Laravel */}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  {/* Pricing */}
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               Sài Gòn, Việt Nam
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                shopbanquanao@icloud.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +0123456789
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +0123456789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
  // return (
  //   <>
  //     <footer className="mb-0 text-center">
  //       <div className="d-flex align-items-center justify-content-center pb-5">
  //         <div className="col-md-6">
  //           <p className="mb-3 mb-md-0"> Made 
  //             <a  href="https://www.youtube.com/?app=desktop&hl=vi" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Economic1</a>
  //           </p>
  //           <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
  //             <i className="fa fa-github"></i>
  //           </a>
  //         </div>
  //       </div>
  //     </footer>
  //   </>
  // );
};

export default Footer;
