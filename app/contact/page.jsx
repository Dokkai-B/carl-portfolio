"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+63) 920 802 3514",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "cpacaguas@mymail.mapua.edu.ph",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sumatra, Filinvest East, Cainta, Rizal",
  }
];

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: "Carl Patrick Adrian Aguas",
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_klktepa",  // Replace with your EmailJS service ID
        "template_awu3gbb", // Replace with your EmailJS template ID
        templateParams,
        "fC4Z0LM8IMCn8O1eM"      // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#243546] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p>  I&apos;m always excited to connect and collaborate on new projects. Whether you need a website, an app, or creative design solutions, I&apos;m here to help. Let's create something great together!
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Firstname" />
                <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Lastname" />
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email address" />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
              </div>
              {/* Select */}
              <Select name="service" onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* Button */}
              <Button type="submit" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#243546] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;
