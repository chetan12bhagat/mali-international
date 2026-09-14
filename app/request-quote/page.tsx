"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { quoteFormSchema, QuoteFormData } from "@/lib/validation";

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      console.log("Quote form data:", data);
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
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]} />
          <AnimatedSection>
            <SectionLabel className="mb-4">Quote</SectionLabel>
            <h1 className="text-dark-text mb-4 max-w-3xl">
              Tell Us What You Need.
            </h1>
            <p className="text-xl text-muted max-w-[560px] leading-relaxed">
              Share your product requirements and we&apos;ll help you explore the right sourcing path
              from India.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-[clamp(40px,6vw,80px)] bg-off-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              {submitted ? (
                <div className="bg-white p-8 md:p-12 border border-light-gray text-center">
                  <span className="block w-12 h-[2px] bg-gold mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-dark-text mb-3">
                    Requirement received.
                  </h3>
                  <p className="text-muted">
                    Thank you for your submission. Our team will review your requirement and get back
                    to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white p-8 md:p-10 border border-light-gray"
                >
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-sm text-red-600 rounded-[3px]">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Contact Details */}
                  <h3 className="text-lg font-semibold text-dark-text mb-6">Your Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                    <div>
                      <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                      <input id="fullName" {...register("fullName")} className={inputClasses} />
                      {errors.fullName && <p className={errorClasses}>{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClasses}>Company *</label>
                      <input id="company" {...register("company")} className={inputClasses} />
                      {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="country" className={labelClasses}>Country *</label>
                      <input id="country" {...register("country")} className={inputClasses} />
                      {errors.country && <p className={errorClasses}>{errors.country.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email *</label>
                      <input id="email" type="email" {...register("email")} className={inputClasses} />
                      {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className={labelClasses}>Phone / WhatsApp</label>
                      <input id="phone" {...register("phone")} className={inputClasses} />
                    </div>
                  </div>

                  {/* Product Details */}
                  <h3 className="text-lg font-semibold text-dark-text mb-6">Product Requirements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="product" className={labelClasses}>Product *</label>
                      <input id="product" {...register("product")} className={inputClasses} />
                      {errors.product && <p className={errorClasses}>{errors.product.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="quantity" className={labelClasses}>Quantity</label>
                      <input id="quantity" {...register("quantity")} className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="unit" className={labelClasses}>Unit</label>
                      <input id="unit" {...register("unit")} placeholder="e.g., MT, kg, containers" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="destination" className={labelClasses}>Destination</label>
                      <input id="destination" {...register("destination")} className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="packaging" className={labelClasses}>Packaging</label>
                      <input id="packaging" {...register("packaging")} className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="expectedDelivery" className={labelClasses}>Expected Delivery</label>
                      <input id="expectedDelivery" {...register("expectedDelivery")} className={inputClasses} />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="specifications" className={labelClasses}>Specifications</label>
                    <textarea
                      id="specifications"
                      rows={3}
                      {...register("specifications")}
                      className={`${inputClasses} resize-vertical`}
                      placeholder="Quality standards, certifications, testing requirements..."
                    />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="additionalRequirements" className={labelClasses}>
                      Additional Requirements
                    </label>
                    <textarea
                      id="additionalRequirements"
                      rows={3}
                      {...register("additionalRequirements")}
                      className={`${inputClasses} resize-vertical`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-medium rounded-[3px] hover:bg-navy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Requirement"}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
