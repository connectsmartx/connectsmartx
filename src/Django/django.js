import React from 'react';
import './Flowchart.css'; 

const Django = () => {
  return (
    <div className="flowchart-container">
      <div className="node start" id="node1">
        Start
      </div>
      <svg className="link-arrow" height="100%" width="100%">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="2" />
      </svg>
      <div className="node" id="node2">
          Month 1: Getting Started with Django
        </div>
      <div className='nodeX1'>
        <div className="node" id="node2.1">
          Learn Python Basics (Codecademy Python Course)
        </div>
        <svg className="link-line" height="100%" width="100%">
          <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
        </svg>
        <div className="node" id="node2.2">
          Web Fundamentals (HTML, CSS, JavaScript - MDN Web Docs)
        </div>
        <svg className="link-line" height="100%" width="100%">
          <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
        </svg>
        <div className="node" id="node2.3">
          Setup Django Environment (Django Official Documentation)
        </div>
        <svg className="link-line" height="100%" width="100%">
          <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
        </svg>
        <div className="node" id="node2.4">
          Create a Simple Django Project (Django Official Tutorial)
        </div>
      </div>
      <div className="node" id="node3">
          Month 2: Database and Models
      </div>
      <div className="nodeX1">
          <div className="node" id="node3.1">
            Database Concepts (W3Schools SQL Tutorial)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node3.2">
            Django Models (Django Models Documentation)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node3.3">
            Model Relationships (Django Model Relationships)
          </div>
        </div>
        <div className="node" id="node4">
          Month 3: Views and Templates
        </div>
        <div className="nodeX1">
        
          <div className="node" id="node4.1">
            Django Views (Django Views Documentation)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node4.2">
            Django Templates (Django Templates Documentation)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node4.3">
            Template Language (Django Template Language)
          </div>
        </div>
        <div className="node" id="node5">
          Month 4: Forms and User Authentication
        </div>
      <div className="nodeX1">
          <div className="node" id="node5.1">
            Django Forms (Django Forms Documentation)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node5.2">
            User Authentication (Django Authentication Documentation)
          </div>
        </div>
      <div className="node" id="node6">
        Month 5: Static Files and Media Handling
      </div>
      
      <div className="nodeX1">
          <div className="node" id="node5.1">
            Static Files (Django Static Files Documentation)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node5.2">
            Media Handling (Django File Uploads Documentation)
          </div>
        </div>
        <div className="node" id="node6">
          Month 6: Django Admin and Security
        </div>
      <div className="nodeX1">
        
          <div className="node" id="node6.1">
            Django Admin (Django Admin Documentation)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node6.2">
            Security Best Practices (Django Security Documentation)
          </div>
        </div>
      <div className="node" id="node7">
          Month 7: RESTful APIs
        </div>
      <div className="nodeX1">
          <div className="node" id="node7.1">
            API Concepts (MDN Web Docs - HTTP Basics)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node7.2">
            Django REST framework (Django REST framework Documentation)
          </div>
        </div>
        <div className="node" id="node8">
          Month 8: Django Testing
        </div>
      <div className="nodeX1">
            <div className="node" id="node8.1">
            Test-Driven Development (TDD) (Test-Driven Development with Python)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node8.2">
            Django Testing (Django Testing Documentation)
          </div>
        </div>
        <div className="node" id="node9">
          Month 9: Deployment and Scaling
        </div>
        <div className="nodeX1">
          <div className="node" id="node9.1">
            Deployment Basics (Deployment with Django)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node9.2">
            Scalability (Scalability in Django)
          </div>
        </div>
        <div className="node" id="node10">
          Month 10: Django Project Structure
        </div>
      <div className="nodeX1">
          <div className="node" id="node10.1">
            Project Refactoring (Two Scoops of Django)
          </div>
        </div>
        <div className="node" id="node11">
          Month 11: Advanced Concepts
        </div>
      <div className="nodeX1">
          <div className="node" id="node11.1">
            Custom Middleware (Django Middleware Documentation)
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node11.2">
            Caching (Django Caching Documentation)
          </div>
        </div>
      <div className="node" id="node12">
          Month 12: Final Project and Review
      </div>
      <div className="nodeX1">
            <div className="node" id="node12.1">
            Final Project
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node12.2">
            Code Review and Refinement
          </div>
          <svg className="link-line" height="100%" width="100%">
            <line x1="50%" y1="50%" x2="60%" y2="50%" stroke="white" strokeWidth="3" />
          </svg>
          <div className="node" id="node12.3">
            Continued Learning (Django Release Notes)
          </div>
        </div>
      <svg className="link-arrow" height="100%" width="100%">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="2" />
      </svg>
      <div className="node end" id="node14">
        End
      </div>
    </div>
  );
};

export default Django;
