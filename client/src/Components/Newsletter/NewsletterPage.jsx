// import React from 'react';
import "./Newsletter.css"

function NewsletterPage() {
  return (
    <div>
      <table border="0" width="100%" cellPadding="0" cellSpacing="0" className="header">
        <tr>
          <td align="center" style={{ background: 'url(http://i.imgur.com/ymD1KR0.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat' }}>
            <table border="0" align="center" width="590" cellPadding="0" cellSpacing="0" className="container590">
              <tr>
                <td height="25" style={{ fontSize: '25px', lineHeight: '25px' }}>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <table border="0" align="left" cellPadding="0" cellSpacing="0" className="container590">
                    <tr>
                      <td align="center">
                        <table border="0" cellPadding="0" cellSpacing="0" align="center"></table>
                      </td>
                    </tr>
                  </table>
                  <table border="0" align="left" width="5" cellPadding="0" cellSpacing="0" className="container590">
                    <tr>
                      <td width="5" height="10" style={{ fontSize: '10px', lineHeight: '10px' }}>&nbsp;</td>
                    </tr>
                  </table>
                  <table border="0" align="right" cellPadding="0" width="360" cellSpacing="0" className="hide"></table>
                </td>
              </tr>
              <tr className="hide">
                <td height="35" style={{ fontSize: '35px', lineHeight: '35px' }}>&nbsp;</td>
              </tr>
              <tr>
                <td height="50" style={{ fontSize: '50px', lineHeight: '50px' }}>&nbsp;</td>
              </tr>
              <tr>
                <td align="center">
                  <table border="0" width="500" align="center" cellPadding="0" cellSpacing="0" className="container590">
                    <tr>
                      <td align="center" style={{ color: '#ffffff', fontSize: '45px', fontFamily: "'Titillium Web', Helvetica Neue, Calibri, sans-serif", lineHeight: '35px' }} className="main-section-header outlook-font">
                        <div style={{ lineHeight: '35px' }}>
                          NISHE NEWSLETTER
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td height="20" style={{ fontSize: '20px', lineHeight: '20px' }}>&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center" className="outlook-font" style={{ color: '#eaf5ff', fontSize: '15px', fontFamily: "'Titillium Web', Helvetica Neue, Calibri, sans-serif", lineHeight: '24px' }}>
                        <div style={{ lineHeight: '24px' }}>
                          {/* Add your newsletter content here */}
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <div style={{ height: '30px' }}></div>
      <div className="event-card">
        <img className="event-image" src="https://imgs.search.brave.com/AQ--xoifDKUHSQtIJz0vKuEt5MtrDskVNoddV55zDYA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXNwYXN1c3RhaW5h/YmlsaXR5LmNvbS93/cC1jb250ZW50L2lt/YWdlcy9ncmFwaGlj/cy9ob21lLWZlYXR1/cmVpbWFnZS5wbmc" alt="Sustainability Symposium" />
        <div className="event-details">
          <div className="event-heading">Sustainability Symposium</div>
          <div className="event-date-time">October 15, 2023 | 9:00 AM - 4:00 PM</div>
          <div className="event-info">
            <p>Join us for a day of insightful discussions on sustainability, featuring expert speakers, interactive workshops, and innovative ideas to address environmental challenges.</p>
            <p><strong>Speakers:</strong> Dr. Jane Smith (Environmental Scientist), Prof. John Doe (Renewable Energy Expert)</p>
          </div>
        </div>
      </div>
      <div style={{ height: '30px' }}></div>
      <div className="event-card">
      <img className="event-image" src="https://imgs.search.brave.com/D4Ol-utjBbWeybg1M-BtIhn3Flik8brJ9FTo1SQ14yc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wZXJzb24tcGxh/bnRpbmctdHJlZS1n/YXJkZW5fNzgwODM4/LTQ5NC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt="Sustainability Symposium" />
        <div className="event-details">
          <div className="event-heading">Campus Tree Planting Day</div>
          <div className="event-date-time">November 5, 2023 | 10:00 AM - 12:00 PM</div>
          <div className="event-info">
            <p>Help us make our campus more sustainable by participating in a tree planting event. Learn about local tree species and contribute to biodiversity enhancement.</p>
            <p><strong>Heading:</strong> "Greening Our Campus, One Tree at a Time"</p>
          </div>
        </div>
      </div>
      <div style={{ height: '30px' }}></div>
      <div className="event-card">
      <img className="event-image" src="https://imgs.search.brave.com/Hes3XYuQmCr8JX_X4MqGRgqVor4-7zaE62pd2kj8l48/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MTkwNjc3OC9waG90/by9zdXN0YWluYWJp/bGl0eS1kYXRhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1X/c1ZHOUpFVjgwNDlj/am5GZFA4Mkx1T214/SW05NG1xZDNyLTJJ/M2VmYWFzPQ" alt="Sustainability Symposium" />
        <div className="event-details">
          <div className="event-heading">Sustainability Film Screening</div>
          <div className="event-date-time">December 2, 2023 | 6:30 PM - 8:30 PM</div>
          <div className="event-info">
            <p>Join us for an evening of thought-provoking films focused on environmental and social issues. A discussion with filmmakers will follow the screening.</p>
            <p><strong>Speakers:</strong> Filmmaker Panel (Guests TBA)</p>
          </div>
        </div>
      </div>
      <div style={{ height: '30px' }}></div>
      <div className="event-card">
      <img className="event-image" src="https://imgs.search.brave.com/k5EKqNugC78BfqbJMly7SGj-kEJkfXuuqg2yK4cHnsw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/ODIyNzU2Ni9waG90/by9wbGFzdGljLWZy/ZWUtem9uZS1zaWdu/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz13MFVqNFhnY0d4/MUhxX1J1dzBydDRo/WThWdmZLdElBMXBV/T0NhdnJwYTRvPQ" alt="Sustainability Symposium" />
        <div className="event-details">
          <div className="event-heading">Plastic-Free Campus Campaign Kickoff</div>
          <div className="event-date-time">February 10, 2024 | 11:00 AM - 1:00 PM</div>
          <div className="event-info">
            <p>Be a part of our campaign to reduce single-use plastics on campus. Sign the pledge, participate in upcycling workshops, and learn about sustainable alternatives.</p>
            <p><strong>Speakers:</strong> Environmental Activists (Guests TBA)</p>
          </div>
        </div>
      </div>
      {/* Repeat the above event card structure for other events */}
      <table border="0" width="100%" cellPadding="0" cellSpacing="0" style={{backgroundColor:"f8f9fa"}}>
        <tr>
          <td height="25" style={{ fontSize: '25px', lineHeight: '25px' }}>&nbsp;</td>
        </tr>
        <tr>
          <td align="center">
            <table border="0" align="center" width="590" cellPadding="0" cellSpacing="0" className="container590">
              <tr>
                <td align="center" style={{ color: '#9c9c9c', fontSize: '13px', fontFamily: "'Titillium Web', Helvetica Neue, Calibri, sans-serif", lineHeight: '24px' }} className="outlook-font align-center">
                  Address Line 1,<br />
                  Address Line 2,<br />
                  Zip Code
                </td>
              </tr>
              <tr>
                <td height="30" style={{ fontSize: '30px', lineHeight: '30px' }}>&nbsp;</td>
              </tr>
              <tr>
                <td align="center" style={{ color: '#9c9c9c', fontSize: '13px', fontFamily: "'Titillium Web', Helvetica Neue, Calibri, sans-serif", lineHeight: '24px' }} className="outlook-font align-center">
                  You're receiving this email because you've signed up to receive updates from Karakol. If you'd prefer not to receive updates you can <a href="#" style={{ color: '#9c9c9c' }}>unsubscribe from all</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td height="25" style={{ fontSize: '25px', lineHeight: '25px' }}>&nbsp;</td>
        </tr>
      </table>
    </div>
  );
}

export default NewsletterPage;
