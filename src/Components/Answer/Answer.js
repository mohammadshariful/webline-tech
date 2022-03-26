import React from "react";
import { Accordion } from "react-bootstrap";
import porpsVSstate from "../../images/propVSstate.jpg";
import reactWork from "../../images/react-work.jpg";
import useStateWork from "../../images/useState-work.png";
const Answer = () => {
  return (
    <div className="my-2">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header> How does React work?</Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <img src={reactWork} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="my-2">
                  <p>
                    রিয়েক্ট হচ্ছে জাভাস্ক্রিপ্ট লাইব্রেরী যা ইউজার ইন্টারফেস
                    তৈরিতে সহায়তা করে। রিয়াক্ট লাইব্রেরী এইচটিএমএল জেনারেট করে
                    দেয় এবং রিয়েক্ট ডম লাইব্রেরী ডমে রেন্ডার করে দেয়।
                    রিয়্যাক্ট জেএসএক্স সিনটেক্স দিয়েছে যার জন্য সহজেই রিয়্যাক্ট
                    এলিমেন্ট বানানো যায়। রিয়াক্ট বিহাইন্ড দ্য সিন এ রিয়্যাক্ট
                    তার ক্রিয়েট এলিমেন্ট ফাংশন কল করে নিজের জন্য এলিমেন্ট বানিয়ে
                    নেয় এবং সব এলিমেন্ট জোড়া লাগিয়ে রেন্ডার ট্রী গঠন করে।
                    রিয়্যাক্ট নিজের দুনিয়ায় কাজ করে এবং সেপারেট ডম তৈরি করে যাকে
                    ভার্চুয়াল ডম বলা হয়। ব্রাউজারের ডমের কোন জায়গায় পরিবর্তন
                    হলে রিয়্যাক্ট রিকনসিলেশন এ ডিফ অ্যালগরিদম ব্যবহার করে
                    ব্রাউজার ডমের সাথে ভার্চুয়াল ডম এর তুলনা করে। খুব
                    ইফিসিয়েন্ট ভাবে রিয়াক্ট ঐ পার্টিকুলার অংশ পরিবর্তন করে
                    ব্রাউজার ডমে রেন্ডার করে দেয়।
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does useState work?</Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <img src={useStateWork} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="my-2">
                  <p>
                    ইউজ স্টেট রিয়েক্ট এর একটি হোক বা ফাংশন। কোন ভ্যালু স্টোর
                    করার জন্য ইউজ স্টেট ব্যবহার করা হয়।যখন ইউজ স্টেট ফাংশন কল
                    করা হয় তখন এই ফাংশন একটি অ্যারে রিটার্ন করে। এই অ্যারেতে
                    দুটি এলিমেন্ট থাকে। ১. স্টেট-ঃ স্টেটে ভেরিয়েবলের ভ্যালু
                    স্টোর রাখে। ২.সেট স্টেট-ঃ সেট স্টেট একটা ফাংশন। ইউজারের
                    ইন্টারেকশন স্টেট এর মান পরিবর্তন হতে পারে সেজন্য সেট স্টেট
                    ফাংশন কল করার মাধ্যমে সেট এর ভ্যালু আপডেট করা হয়।
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is the difference between props vs state?
          </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <img src={porpsVSstate} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="my-2">
                  <div>
                    <h4>প্রপস</h4>
                    <ul>
                      <li>প্রপস হচ্ছে কম্পোনেন্টের বাহিরে ডাটা। </li>
                      <li> প্রপস ইমিউটাবল। </li>
                      <li>এইটাকে শুধু রিড করা যায়।</li>
                    </ul>
                  </div>
                  <div>
                    <h4>স্টেট</h4>
                    <ul>
                      <li>স্টেট হচ্ছে কম্পোনেন্টের নিজস্ব ডাটা। </li>
                      <li>স্টেট মিউটাবল।</li>
                      <li>এইটা রিড রাইট দুটোই করা যায়।</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Answer;
