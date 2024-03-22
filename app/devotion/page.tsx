
"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
interface devotion {
    title: string;
    excerpt: string;
    author_name: string;
    shareable_image: string;
    author_link: string;
    bible_in_a_year_url: string;
    bible_in_a_year_references: string;
    verse: string;
    passage_url: string;
    passage_reference: string;
    insights: string;
    content: string;
    response: string;
    thought: string;
}

export default function Devotion(){

    const [devotions, setDevotions] = useState<devotion[]>([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        let today = new Date();
        let formattedDate = today.toLocaleDateString('en-US', {
          day: '2-digit', 
          month: '2-digit', 
          year: 'numeric'
        });
        console.log(formattedDate);  // Outputs date in MM-DD-YYYY format

      fetch(
        `https://api.experience.odb.org/devotionals/v2?site_id=1&status=publish&country=MY&on=${today}`,
        { next: { revalidate: 3600 } }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => setDevotions(data))
        .catch((error) => setError(error.message));
    }, []);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
	return (
		<Layout>
        {devotions && devotions.map((devotion) => (
				<>
		
					<div className="flex h-full overflow-hidden mb-8">
						<div className="m-auto">
							<main className="mb-12">
                                <Image
										src={devotion.shareable_image}
										alt={devotion.title}
										layout="fill"
										objectFit="cover"
										priority={true}
									/>
								<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-screen">								
									<div className="p-4 absolute bottom-2 left-0 z-10">
										<h2 className="text-4xl  text-white leading-tight font-extrabold">
											{devotion.title}
										</h2>
										<div className="flex mt-3">
                                        <Image
                                        src={
                                            "https://d626yq9e83zk1.cloudfront.net/authors/" +
                                            devotion.author_link
                                                .replace("https://odb.org/author/", "")
                                                .split("/")[0] +
                                            ".jpg"
                                        }
                                        alt={devotion.author_name}
                                        width={40}  // Adjust the size here
                                        height={40}  // Make sure width and height are the same
                                        className="rounded object-cover	"
                        />
											<p className="font-semibold text-white text-xl absolute left-16 ">
												<a href={devotion.author_link} target="_blank" rel="noopener noreferrer">
													{devotion.author_name}
												</a>
											</p>
											<p className="font-semibold text-white text-sm absolute bottom-4 left-16">
												{new Date().toDateString()}
											</p>
										</div>
									</div>
								</div>
								<div className="px-4 lg:px-0 mt-6 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
									<p className="text-lg font-semibold text-gray-600 leading-tight md:text-2xl pb-8">
										Bible in a Year:{" "}
										<a
											href={devotion.bible_in_a_year_url}
											target="_blank"
											rel="noopener noreferrer"
											className="underline md:text-2xl text-kg"
										>
											{devotion.bible_in_a_year_references}
										</a>
									</p>
									<div
										className="text-lg text-center pl-4 mb-8 italic font-semibold rounded md:text-2xl"
										dangerouslySetInnerHTML={{ __html: devotion.verse }}
									/>
									<p className="text-lg font-semibold text-gray-600 md:text-2xl pb-4">
										Today's Scripture: &nbsp;
										<a
											href={devotion.passage_url}
											target="_blank"
											rel="noopener noreferrer"
											className=" text-lg rounded-full border pt-2 pb-2 pl-4 pr-4 bg-blue-700 text-white md:text-2xl"
										>
											{devotion.passage_reference}
										</a>
									</p>
									<div className="border-4 border-double border-indigo-600 font-semibold p-4 mb-6">
										<h2 className="text-2xl text-center  text-indigo-800 font-semibold pb-2">
											Insight
										</h2>
										<div
											className="font-semibold rounded whitespace-pre-line text-pretty text-justify	"
											dangerouslySetInnerHTML={{ __html: devotion.insights }}
										/>
									</div>
									<div
										className="text-black whitespace-pre-line text-pretty text-justify	"
										dangerouslySetInnerHTML={{ __html: devotion.content }}
									/>
							<div className="p-2 text-bold border border-black">
    <h2 className="text-2xl text-center text-gray-800  mb-4 mt-4 font-bold	">
        Reflect & Pray 

    </h2>
    <p className="text-semibold  pb-6 text-bold">
        <div
            className="text-black text-center font-semibold	"
            dangerouslySetInnerHTML={{ __html: devotion.response }}
        />
    </p>
    <p className="text-semibold">
        <div
            className="text-black text-center italic"
            dangerouslySetInnerHTML={{ __html: devotion.thought }}
        />
    </p>
</div>
								</div>
							</main>
						</div>
					</div>
				</>
			))}
		</Layout>
	)
}

