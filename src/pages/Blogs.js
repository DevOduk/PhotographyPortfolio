import React, { useContext, useState, useEffect } from 'react';




function Blogs() {
  document.title = 'Blogs | Autoconnect | P2P Car sharing marketplace  in East Africa | Kenya, Uganda, Tanzania'

  const [comments, setComments] = useState([
    { name: 'John Doe', text: 'Great post! Really enjoyed reading it.' },
    { name: 'Jane Smith', text: 'Thanks for sharing such valuable information.' }
  ]);

  const [newComment, setNewComment] = useState({ name: '', text: '' });


  function generateKey(length) {
    const characters = '0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters[randomIndex];
    }
    return key;
  }
  const anonymousKey = generateKey(5);


  const [anonymous, setAnonymous] = useState(false);

  const handleAnonymous = () => {
    setAnonymous(!anonymous);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.text) {
      setComments([...comments, newComment]);
      setNewComment({ name: '', text: '' });
    }
  };

  return (
    <>
    <style jsx>{`
          .meetTeam {
            background-color: ${'#fbf9f6'};
            height: 100% !important;
          }
          @media (max-width: 770px) {
            .meetTeam {
                .container {
                  flex-direction: column !important;
                  img {
                    width: 100% !important;
                  }
                }
              }
            }
    
      `}</style>
              <div className='aboutBG text-light d-flex flex-column justify-content-center align-items-start gap-4' style={{backgroundImage: `url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')`, minHeight: '50vh'}} >
                  <div className='mt-2 px-4'>
                      <div>
                          <h2><strong>Blogs</strong></h2>
                          <p>View Autoconnect's blogs and stay up to date with the lates trends and tricks in the automobile realm!</p>
                      <div className='d-flex gap-3 text-light align-items-center' id='socialsList'>
                        Share on: 
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-facebook" title='Facebook'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-instagram" title='instagram'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-twitter" title='twitter/X'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-whatsapp" title='youtube'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-tiktok" title='tiktok'></i>
                        </a>
                        <a id='socialsIcon' href='#'>
                          <i className="bi bi-three-dots" title='tiktok'></i>
                        </a>
                      </div>
                      </div>
                  </div>
                </div>
                <div className='container'>
                  <h2 className="text-lg"><strong> How to earn more on Autoconnect by using these 10 tips</strong> </h2>
                  <div className='d-flex gap-3 align-items-center'>
                    <img style={{width: '60px', borderRadius: '50%', aspectRatio: '1/1', objectFit: 'cover'}} src='https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D' alt='Author photo' />
                    <div className=''>
                      <h5>Milicent Foote</h5>
                      <small>June 14, 2024 • 5 Minute Read</small>
                    </div>
                  </div>
                  <div className='mt-3 mb-4'>
                    <img style={{width: '100%'}} src='https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D' alt='Author photo' />
                    <small className=''><i>Phogography credits: The Nissan GT 2017 || Austine O.</i></small></div>
                  <div className='d-flex gap-3' style={{lineHeight: '2', position: 'relative'}}>
                    <div className='mainblogLeft'>
                        <h4><strong>When we acquired Wizzle three years ago, our car-selling process looked very different.</strong></h4>
                        <p>
                          Private sellers answered a few questions about their car’s general condition and only had to upload a minimum of one photo. 
                          The listing then went straight into the dealer site for our dealer partners to view and bid on.
                        </p>
                  
                        <p>
                          Since then, we’ve made some massive changes to better serve our dealer partners, putting over 145,000 vehicles back onto dealer forecourts 
                          with low buyers fees. We aim to continually streamline the entire process, boost buyer confidence, and ensure healthy profit margins 
                          — all while increasing the volume of relevant vehicles available. We’ve grown from a few hundred cars available a month to over 17,000 each month.
                        </p>
                  
                        <p>
                          Some may say we’re now out of the terrible twos, and into the thriving threes! The truth is we’re always working to improve the experience 
                          for our partners, so check out these top 10 game-changing enhancements we’ve made to our auctions from infancy to now…
                        </p>
                  
                        <h4><strong>1. Pre-qualification</strong></h4>
                        <p>
                          We now contact every seller to set a realistic price and check the information provided in the listing. This ensures that the listings 
                          are accurate and reliable right from the get-go.
                        </p>
                  
                        <h4><strong>2. Photo upload experience</strong></h4>
                        <p>
                          We added a ‘ghost’ photo guide to improve the consistency of images on the site. This tool helps sellers take better, more uniform photos, 
                          making it easier for dealers like you to assess the vehicles.
                        </p>
                  
                        <h4><strong>3. Enhanced vehicle checks with Motorcheck</strong></h4>
                        <p>
                          We partnered with Motorcheck to provide more detailed checks. Any vehicles with undesirable accident history are automatically rejected, 
                          and any vehicles previously used as taxis, military, emergency services etc are clearly flagged for full transparency.
                        </p>
                  
                        <h4><strong>4. Detailed damage and condition reporting</strong></h4>
                        <p>
                          We improved how we capture and display damage information. Each vehicle section is now detailed with photos, simplified descriptions, 
                          and damage sizing, giving you more transparent information. Most listings now include service history, uploaded by the seller and quality checked by us.
                        </p>
                  
                        <h4><strong>5. Document collection</strong></h4>
                        <p>
                          To save you time when collecting sellers’ documents, we’ll handle that for you. We’ll check the vehicle has all the required documents 
                          for you to complete the purchase and keep you in the loop.
                        </p>
                  
                        <h4><strong>6. Ramped up our Carwow Collects service</strong></h4>
                        <p>
                          Pressed for time or resources to collect vehicles from sellers? No problem! We can collect and deliver the vehicle directly to your forecourt, 
                          giving you time to inspect it physically before purchase.
                        </p>
                  
                        <h4><strong>7. Increased stock volumes including LCVs</strong></h4>
                        <p>
                          Why should cars have all the fun? Based on popular demand, we unlocked our auctions for LCV’s and have already put 1000s of them 
                          onto dealers' forecourts nationwide.
                        </p>
                  
                        <h4><strong>8. Personalised stock recommendations</strong></h4>
                        <p>
                          To help you find the stock you want faster, we developed a tool powered by a combination of your bidding history and A.I. 
                          to show you stock that's personally recommended for you. The more you bid, the smarter and more relevant it gets.
                        </p>
                  
                        <h4><strong>9. Advisory status</strong></h4>
                        <p>
                          We know advisories can be costly. We now ask sellers the status of the advisory and whether it has been fixed. This helps avoid any nasty surprises!
                        </p>
                  
                        <h4><strong>10. Buy with confidence with BuySafe</strong></h4>
                        <p>
                          Carwow BuySafe protects you from major repair costs associated with pre-existing issues or issues that may arise after you have taken delivery of a vehicle for just £59. 
                          Game-changing in your world of profit-making.
                        </p>
                  
                        <h4><strong>OK, we know this is a Top 10 but we've saved the best until extra last...</strong></h4>
                  
                        <h4><strong>10. Launched our daily auctions with round-the-clock bidding</strong></h4>
                        <p>
                          To give you even more flexibility and convenience, you can now place your bids from 5pm the night before any of our six daily online auctions every week. 
                          So wherever you are, whether it's the office or the beach (we wish), you can place your bids then get on with your day.
                        </p>
                    </div>
                    <div className='blogRight p-2'>
                      <h6>Share</h6>
                    <div className='d-flex gap-3 text-light align-items-center mb-3' id='socialsList'>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-facebook" title='Facebook'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-instagram" title='instagram'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-twitter" title='twitter/X'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-whatsapp" title='youtube'></i>
                        </a>
                        <a id='socialsIcon' href='/facebook.com'>
                          <i className="bi bi-tiktok" title='tiktok'></i>
                        </a>
                      </div>
                      <h6>Related</h6>
                          <div className="d-flex gap-2 align-items-start p-1 rounded mb-2">
                            <img 
                              style={{ width: '50px', aspectRatio: '1/1', objectFit: 'cover' }} 
                              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Author photo" 
                              className="rounded-circle"
                            />
                            <div className="d-flex flex-column justify-content-between align-items-stretch rounded text-dark w-100">
                              <a href="#" className="text-decoration-none text-dark">
                                This is the top 10 most reliable cars according to reports...
                              </a>
                              <div className="text-muted">June 14, 2024</div>
                            </div>
                          </div>

                          <div className="d-flex gap-2 align-items-start p-1 rounded mb-2">
                            <img 
                              style={{ width: '50px', aspectRatio: '1/1', objectFit: 'cover' }} 
                              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Author photo" 
                              className="rounded-circle"
                            />
                            <div className="d-flex flex-column justify-content-between align-items-stretch rounded text-dark w-100">
                              <a href="#" className="text-decoration-none text-dark">
                                This is the top 10 most reliable cars according to reports...
                              </a>
                              <div className="text-muted">June 14, 2024</div>
                            </div>
                          </div>
                          

                          
                          <hr className='m-3 bg-dark' />
                      <h6>New</h6>
                          <div className="d-flex gap-2 align-items-start p-1 rounded mb-2">
                            <img 
                              style={{ width: '50px', aspectRatio: '1/1', objectFit: 'cover' }} 
                              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Author photo" 
                              className="rounded-circle"
                            />
                            <div className="d-flex flex-column justify-content-between align-items-stretch rounded text-dark w-100">
                              <a href="#" className="text-decoration-none text-dark">
                                This is the top 10 most reliable cars according to reports...
                              </a>
                              <div className="text-muted">June 14, 2024</div>
                            </div>
                          </div>
                          

                          
                          <hr className='m-3 bg-dark' />
                      <h6>Other</h6>
                          <div className="d-flex gap-2 align-items-start p-1 rounded mb-2">
                            <img 
                              style={{ width: '50px', aspectRatio: '1/1', objectFit: 'cover' }} 
                              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Author photo" 
                              className="rounded-circle"
                            />
                            <div className="d-flex flex-column justify-content-between align-items-stretch rounded text-dark w-100">
                              <a href="#" className="text-decoration-none text-dark">
                                This is the top 10 most reliable cars according to reports...
                              </a>
                              <div className="text-muted">June 14, 2024</div>
                            </div>
                          </div>

                          <div className="d-flex gap-2 align-items-start p-1 rounded mb-2">
                            <img 
                              style={{ width: '50px', aspectRatio: '1/1', objectFit: 'cover' }} 
                              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Author photo" 
                              className="rounded-circle"
                            />
                            <div className="d-flex flex-column justify-content-between align-items-stretch rounded text-dark w-100">
                              <a href="#" className="text-decoration-none text-dark">
                                This is the top 10 most reliable cars according to reports...
                              </a>
                              <div className="text-muted">June 14, 2024</div>
                            </div>
                          </div>

                    </div>
                  </div>
                </div>
                <div className="container my-4">
      <h4><strong>Comments</strong></h4>
      <div className="list-group mb-4">
          <div className="d-flex gap-2 align-items-start p-1 rounded mb-2">
            <img 
              style={{ width: '50px', aspectRatio: '1/1', objectFit: 'cover' }} 
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" 
              alt="Author photo" 
              className="rounded-circle"
            />
            <div className="d-flex flex-column justify-content-between align-items-stretch rounded text-dark w-100">
              <a href="#" className="text-decoration-none text-dark">
                Chris Stewart
              </a>
              <div className="text-muted">June 14, 2024, 12:27</div>
              <div className='p-0 px-2 comment mt-1' style={{borderLeft: '2px solid gainsboro'}}>
                This is a comment className="d-flex flex-column justify-content-between align-items-stretch rounded text-dark w-100"
              </div>
              <div><span className='btn border p-1 px-2'>Reply 0</span> <span className='btn border p-1 px-2'>Like 0</span></div>
            </div>
          </div>
          <div className='text-danger p-4 text-center'>No more comments!</div>
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group mb-3">
          <label htmlFor="text" className="form-label"><strong>Comment</strong></label>
          <textarea
            className="form-control"
            id="text"
            name="text"
            value={newComment.text}
            onChange={handleInputChange}
            placeholder="Write your comment here"
            rows="3"
            required
          />
        </div><div className="form-group mb-3">
      <label htmlFor="text" className="form-label">
        <strong>
          Commenting as (`Anonymous#ACC${anonymousKey}`)
        </strong>
      </label>
      <br />
      <input
        className="form-check-input mx-2"
        type="checkbox"
        name="check"
        value="mpesa"
        id="mpesaRadio"
        checked={anonymous}
        onChange={handleAnonymous}
        style={{ width: '20px' }}
      />{' '}
      Comment anonymously?
    </div>

        <button type="submit" className="btn btn-primary">Add Comment</button>
      </form>
    </div>
    </>
  )
}

export default Blogs