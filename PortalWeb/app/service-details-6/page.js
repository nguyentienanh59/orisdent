'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Service-Details">
                <div>
                {/* service-section */}
                <section className="service-details pt_120 pb_110">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="default-sidebar service-sidebar mr_15">
                                    <div className="sidebar-widget category-widget">
                                        <div className="widget-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="service-details">Cardiology</Link></li>
                                                <li><Link href="service-details-2">Dental Clinic</Link></li>
                                                <li><Link href="service-details-3">Neurosurgery</Link></li>
                                                <li><Link href="service-details-4">Medical</Link></li>
                                                <li><Link href="service-details-5">Pediatrics</Link></li>
                                                <li><Link href="service-details-6" className="current">Modern Laboratory</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="service-block-one">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="assets/images/service/service-2.jpg" alt="" /></figure>
                                                <div className="icon-box"><i className="icon-16"></i></div>
                                            </div>
                                            <div className="lower-content">
                                                <h3>Modern Laboratory</h3>
                                                <p>Tra cứu bảo hành nha khoa Lavie.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="service-details-content">
                                    <div className="content-one mb_60">
                                        <figure className="image-box mb_40"><img src="assets/images/service/service-14.jpg" alt="" /></figure>
                                        <div className="text-box">
                                            <h2>Modern Laboratory</h2>
                                            <p> Nha khoa Lavie</p>
                                            <p>Tra cứu bảo hành nha khoa Lavie</p>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <div className="image-inner">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box mb_30"><img src="assets/images/service/service-8.jpg" alt="" /></figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box mb_30"><img src="assets/images/service/service-9.jpg" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <p>Tra cứu bảo hành nha khoa Lavie.</p>
                                            <p>Tra cứu bảo hành nha khoa Lavie</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* service-section end */}
                {/* subscibe */}
                <section className="subscribe-section">
                        <div className="auto-container">
                            <div className="inner-container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                <div className="text-box">
                                    <h2><span>Subscribe</span> for the exclusive updates!</h2>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <form method="post" action="contact">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Enter Your Email Address" required />
                                        <button type="submit" className="theme-btn btn-one"><span>Subscribe Now</span></button>
                                    </div>
                                    <div className="form-group">
                                        <div className="check-box">
                                        <input className="check" type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                        {/* subscibe end */}
                </div>

            </Layout>
        </>
    )
}