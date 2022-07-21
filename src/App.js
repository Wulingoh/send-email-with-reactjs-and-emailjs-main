import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardWithHeader from "../src/components/cards";
//https://github.com/abdulwaqar844/send-email-with-reactjs-and-emailjs
function App() {
  init("user_aVMjgLam4rroy8ETgabF9");
  const form = useRef();
  // let q1 = "";
  // let q1name = "";
  // let q2 = "";
  // let q2name = "";
  // let q3 = "";
  // let q3name = "";
  // let q4 = "";
  // let q4name = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs
      .sendForm(
        "service_03k440o",
        "template_ymy3mpi",
        form.current,
        "ZKFMughkI-DFVOiem"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} ref={form}>
        <h1 className='text-center'>Software Learner Journey</h1>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='First Name'>First Name</label>
            <input type='text' className='form-control' name='firstname' />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='Last Name'>Last Name</label>
            <input type='text' className='form-control' name='lastname' />
          </div>

          <CardWithHeader
            bgcolor='#fbe5d6'
            sectiontitle={"Taha Tinana-Physical well-being"}
            description={`Taha tinana is your physical wellbeing. It is about how your body grows, feels and moves, and how you care for it. 
              
              Nourishing and strengthening your physical wellbeing helps you to cope with the ups and downs and life. 
              
              Feeling physically well helps you feel mentally well. Some key things to take care of taha tinana are physical activity, healthy eating, sleep and not smoking. 
              
              Some key things to take care of taha tinana are physical activity, healthy eating, sleep and not smoking.  
              
              To strengthen your taha tinana, consider making a commitment with your whānau, friends or hoamahi (colleagues) to pick one thing you could each do to improve your physical wellbeing`}
            q1={"How does your body feel, moves, and grows?"}
            q1name={"q1bodyfeelmessage"}
            q2={"What do you do to take care of your body?"}
            q2name={"q2bodycaremessage"}
            q3={"What do you need to help you? / How can you be supported?"}
            q3name={"q3bodyhelpmessage"}
          ></CardWithHeader>

          <CardWithHeader
            bgcolor='#e2f0d9'
            sectiontitle={"Taha hinengaro (mental and emotional wellbeing)"}
            description={`Taha hinengaro is your mind, heart, conscience, thoughts and feelings. It’s about how you feel, as well as how you communicate and think. Taking care of taha hinengaro is important for everyone, regardless of whether or not you’ve experienced mental illness or distress. When taha hinengaro is strong, you can better cope with life’s challenges. You can express your feelings and reach out for support from friends, whānau and hoamahi (colleagues) if you need to. `}
            q1={
              "How you feel in your mind, heart and conscience thoughts (Stressed, anxious, worried, unsure, over excited, unfocused, hungry, physically not well.)"
            }
            q1name={"q1emotionalfeelmessage"}
            q2={"What do you need to help you? / How can you be supported?"}
            q2name={"q2emotionalhelpmessage"}
          ></CardWithHeader>

          <CardWithHeader
            bgcolor='#fdcff4'
            sectiontitle={"Taha whānau (family and social health)"}
            description={`Taha whānau is about who makes you feel like you belong, who you care about and who you share your life with.Whānau is about extended relationships – it’s not just your immediate relatives, it’s your friends, hoamahi (colleagues), community and the people you care about. Everyone has a place and a role to fulfil within their whānau, and whānau contributes to your individual wellbeing and identity.Spending time with whānau, doing things for them and getting involved gives you a feeling of purpose, connection and wellbeing. It benefits you and strengthens your whānau. As a core source of strength, support, security and identity, whānau plays a central role in your wellbeing. `}
            q1={"Who gives you strength, support, security & identity?"}
            q1name={"q1familyhelpmessage"}
            q2={"Who do you have to support you? Who can you talk to?"}
            q2name={"q2familyhelpmessage"}
            q3={"Who do you need to help you? / How can you be supported?"}
            q3name={"q3familyhelpmessage"}
          ></CardWithHeader>

          <CardWithHeader
            bgcolor='#fff2cc'
            description={
              "Your spiritual essence is your life force – your mauri. This is who and what you are, where you have come from and where you are going. The way people view wairua can be very different. For some, wairua is the capacity for faith or religious beliefs or having a belief in a higher power. For others, wairua is an internal connection to the universe or the sacred. There is no right or wrong way to think of or experience wairua, but it is an important part of your mental wellbeing. Spiritual wellbeing can be expressed through beliefs, values, traditions and practices that support self-awareness and identity. Taha wairua provides a sense of meaning and purpose as well as experiencing a sense of connectedness to self, whānau, community, nature and the sacred.  "
            }
            sectiontitle={"Taha wairua (spiritual wellbeing and sense of self)"}
            q1={"What do you believe / hold close to you?"}
            q1name={"q1spiritualmessage"}
            q2={
              "What is important in your life?(Family, Friends, Religion, Beliefs and Traditions)"
            }
            q2name={"q2spiritualmessage"}
            q3={"Who do you need to help you? / How can you be supported?"}
            q3name={"q3spiritualmessage"}
          ></CardWithHeader>

          {/* <div className='form-group col-md-6'>
            <label htmlFor='message'>message</label>
            <textarea
              type='text'
              className='form-control'
              id='inputmessage4'
              name='user_message'
            />
          </div> */}
        </div>

        <button type='submit' className='btn btn-primary'>
          Send Your Journey
        </button>
      </form>
    </div>
  );
}

export default App;
