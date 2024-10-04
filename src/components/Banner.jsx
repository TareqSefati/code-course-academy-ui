import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section>
			<div className="hero bg-base-200 shadow-xl rounded-lg mt-5 px-5">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="/images/banner-3.webp"
						className="max-w-xl rounded-lg shadow-2xl"
					/>
					<div className="space-y-10">
                        <div>
                            <div className="text-2xl font-semibold">
                                Let&apos;s update yourself with latest technology with<br />
                            </div>
                            <div className="mt-5 text-4xl font-bold text-slate-700">
								Code Course Academy
							</div>
                        </div>
						<div>
                            <Link><a className="btn btn-neutral">Enroll</a></Link>
                        </div>
					</div>
				</div>
			</div>
		</section>
  )
}
