import React from 'react';
 
function Footer() {
    return ( 
        <footer style={{ backgroundColor: "rgb(250,250,250)"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{ width:"50%"}}/>
                    <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p> 
                </div>
                <div className='col ' >
                    <p>Company</p>
                    <a href=''style={{textDecoration:"none"}}>About</a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Products</a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Pricing</a>  <br/>
                    <a href=''style={{textDecoration:"none"}}>Referral programme</a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Careers</a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Zerodha.tech</a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Press & media</a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Zerodha cares (CSR)</a> <br/>
                    </div> 

                    <div className='col'>
                   <p>Support</p>
                    <a href=''style={{textDecoration:"none"}}>Contact </a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Support portal </a> <br/>
                    <a href=''style={{textDecoration:"none"}}>Z-Connect blog </a> <br/>
                    <a href=''style={{textDecoration:"none"}}>List of charges </a> <br/>   
                    <a href=''style={{textDecoration:"none"}}>Downloads & resources</a>

                   </div>
               
                <div className='col'>
                <p>Structure</p>
                <a href=''style={{textDecoration:"none"}}>Open an account</a> <br/>
                <a href=''style={{textDecoration:"none"}}>Fund transfer</a> <br/>
                <a href=''style={{textDecoration:"none"}}>60 day challenge</a>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:'14px'}}>
                <p>Zerodha Broking Ltd.: Member of NSE & BSE - SEBI registered. Depository services through Zerodha Securities pvt. ltd. SEBI registered no.: In-1846459825464464 Company Information: Details about Zerodha Broking Ltd., including its registration numbers with various securities and exchange boards, such as NSE, BSE, MCX, CDSL, and NSDL. It also mentions the company's registered address in Bengaluru, India.</p>
                <p>
                Disclaimers and Risks: Notices to investors about the risks associated with trading in the securities market and reminders to read related documents carefully before investing. It also emphasizes the importance of updating mobile numbers and email IDs with stock brokers for security purposes.
                </p>
                <p> Messages about unauthorized transactions, the importance of maintaining updated KYC information, and guidelines for participating in IPOs.</p>
                <p>Complaint Procedures: Instructions on how to file complaints with regulatory authorities like SEBI and links for further assistance.
                   Legal and Privacy Links: Links to terms and conditions, privacy policies, disclosure documents, and investor-related notices.
                   For more detailed and up-to-date information, you can visit the Zerodha website directly​ </p>
            </div>
        </div>
        </footer>
     );
}

export default Footer;