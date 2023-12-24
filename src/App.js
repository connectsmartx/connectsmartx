import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  const inlinestyles={
    backgroundColor: 'transparent',
    margin: '50px',
    minHeight: '200px',
    '@media (max-width: 768px)': {
      backgroundColor: 'transparent',
      margin: '2px',
      minHeight: '100px',
    }
  };
  const inlineimg={
    height:'50%',
    
  }
  return (
    
    <div className='landing'>
      <nav className='navbar'>
      <strong className='nav1'>CONNECTSMARTX</strong>
      <nav className='navbar2'>
        <a href='#' className='anchor2'>Home</a>
        <a href='#project' className='anchor2'>Projects</a>
        <a href='#aboutus' className='anchor2'>About us</a>
        <a href='#contactus' className='anchor2'>Contact</a>
      </nav></nav>
      <div class="card text-center shadow-lg p-3 mb-5  rounded " style={inlinestyles}>
  
  <div class="card-body">
    <p class="card-text"><span style={{color:'black'}}>join our thriving community of open source enthusiasts dedicated to collaborative innovation. Our diverse, global network welcomes individuals passionate about problem-solving, learning, and contributing to cutting-edge projects. Experience the power of transparent communication, shared knowledge, and respect while making a meaningful impact on the world through open source. Explore emerging technologies, evolve with the industry, and be part of a dynamic ecosystem that shapes the future of software development. Join us today to unleash your creativity, enhance your skills, and be a catalyst for positive change.</span></p>
    <a href="#" class="btn btn-primary">Contribute now</a>
  </div>
  
</div> 
<div className='project' id='project'><h1 className='projectsub'>Projects</h1>
<div class="container">
 
    <div class="card">
        <div class="card-header">
            <img src="https://i.ibb.co/y03C6Bs/a-review-websi-1.png"  alt="rover" />
        </div>
        <div class="card-body hell">
            <h4>
                REVIEWX
            </h4>
            <p>
            Universal review site, spanning all categories with global standards in reviews.
            </p>
            <div class="user">
                
                <div class="user-info">
                <button className='btn btn-primary'>contribute now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9uJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="ballons" />
        </div>
        <div class="card-body hell">
            <h4>
                BEGIN PYTHON
            </h4>
            <p>
            User-friendly Python learning website offering intuitive resources, tutorials, and interactive experiences for aspiring programmers.
            </p>
            <div class="user">
              
                <div class="user-info">
                <button className='btn btn-primary'>contribute now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <img src="https://www.shutterstock.com/shutterstock/photos/1487653424/display_1500/stock-vector-searching-hostel-accommodation-ordering-taxi-cab-online-booking-services-internet-reservation-1487653424.jpg" alt="city" />
        </div>
        <div class="card-body hell">
            
            <h4>
                HOSTILEE
            </h4>
            <p>
            Search, Compare, Book Hostels for Budget Travelers Worldwide with Reviews.
            </p>
            <div class="user">
                <div class="user-info">
                    <button className='btn btn-primary'>contribute now</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>




<div className='aboutus' id='aboutus'>
<div class="card card2" style={{backgroundColor: 'transparent',border:'none'}}>
  <h3>About us</h3>
  <p>
  We are a passionate and diverse community united by our shared enthusiasm for contributing to open-source projects. Our members come from varied backgrounds, each bringing unique skills and perspectives to the table. Together, we collaborate on a wide range of projects, from software development to documentation, design, and more. Our collective goal is to make a positive impact on the open-source ecosystem, promoting transparency, innovation, and accessibility in technology. We actively welcome newcomers, fostering a supportive environment for learning and growth. Join us to be part of this dynamic community, where your contributions can help shape the future of open-source software.</p>
 <br></br>
 <ul className='ull'>
    <li><a href="#"><i class="fab fa fa-github"></i></a></li>
    <li><a href="#"><i class="fab fa fa-twitter"></i></a></li>
    <li><a href="#"><i class="fab fa fa-linkedin"></i></a></li>
    <li><a href="#"><i class="fab fa fa-instagram"></i></a></li>
</ul>
 </div>
</div>



<div className="container contactus" id='contactus'>
  <h2>Contact us</h2>
      <form action="https://formsubmit.co/arjunvarma93983@gmail.com" method="POST">
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label htmlFor="lname">Email</label>
        <input type="email" id="lname" name="lastname" placeholder="Enter your email" />

        <label htmlFor="country">Project</label>
        <select id="country" name="country">
          <option value="reviewx">Reviewx</option>
          <option value="beginpython">Begin python</option>
          <option value="hostilee">Hostilee</option>
        </select>

        <label htmlFor="subject">Describe your interest</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
</div>
    
  );
}

export default App;
