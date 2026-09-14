"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { company } from "@/data/company";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // In production, integrate with your form handler
      console.log("Contact form data:", data);
      setSubmitted(true);
      setError(false);
    } catch {
      setError(true);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-light-gray text-dark-text text-[0.9375rem] rounded-[3px] outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors";
  const labelClasses = "block text-sm font-medium text-dark-text mb-1.5";
  const errorClasses = "text-xs text-red-500 mt-1";

  return (
    <>
      <section className="pt-32 pb-[clamp(40px,6vw,60px)] bg-off-white">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Contact</SectionLabel>
            <h1 className="text-dark-text mb-4 max-w-3xl">
              Let&apos;s start a conversation.
            </h1>
            <p className="text-xl text-muted max-w-[560px] leading-relaxed">
              Reach out to discuss your sourcing requirements from India.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(60px,10vw,120px)] bg-off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <h3 className="text-xl font-semibold text-dark-text mb-6">{company.name}</h3>
                <p className="text-muted leading-relaxed mb-8">
                  {company.description}
                </p>

                <div className="space-y-4">
                  {company.email && (
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted block mb-1">Email</span>
                      <a href={`mailto:${company.email}`} className="text-navy font-medium hover:text-gold transition-colors">
                        {company.email}
                      </a>
                    </div>
                  )}
                  {company.phone && (
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted block mb-1">Phone</span>
                      <a href={`tel:${company.phone}`} className="text-navy font-medium hover:text-gold transition-colors">
                        {company.phone}
                      </a>
                    </div>
                  )}
                  {company.whatsapp && (
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted block mb-1">WhatsApp</span>
                      <a
                        href={`https://wa.me/${company.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy font-medium hover:text-gold transition-colors"
                      >
                        {company.whatsapp}
                      </a>
                    </div>
                  )}
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted block mb-1">Location</span>
                    <span className="text-dark-text font-medium">{company.country}</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.1}>
                {submitted ? (
                  <div className="bg-white p-8 md:p-12 border border-light-gray text-center">
                    <span className="block w-12 h-[2px] bg-gold mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-dark-text mb-3">Thank you.</h3>
                    <p className="text-muted">
                      Your enquiry has been received. We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-10 border border-light-gray">
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 text-sm text-red-600 rounded-[3px]">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelClasses}>Name *</label>
                        <input id="name" {...register("name")} className={inputClasses} />
                        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="company" className={labelClasses}>Company</label>
                        <input id="company" {...register("company")} className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>Email *</label>
                        <input id="email" type="email" {...register("email")} className={inputClasses} />
                        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClasses}>Phone</label>
                        <input id="phone" {...register("phone")} className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="country" className={labelClasses}>Country *</label>
                        <input id="country" {...register("country")} className={inputClasses} />
                        {errors.country && <p className={errorClasses}>{errors.country.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="product" className={labelClasses}>Product of Interest</label>
                        <input id="product" {...register("product")} className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="quantity" className={labelClasses}>Quantity</label>
                        <input id="quantity" {...register("quantity")} className={inputClasses} />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className={labelClasses}>Message *</label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className={`${inputClasses} resize-vertical`}
                      />
                      {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-medium rounded-[3px] hover:bg-navy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
