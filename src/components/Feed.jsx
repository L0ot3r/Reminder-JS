import React from 'react';
import { SyntaxCode, SideBar } from './';
import { data } from '../constants/cours';
import { nanoid } from 'nanoid';
import { BsInfoCircle } from 'react-icons/bs';

const Feed = ({ session, categories, setSession, setCategories }) => {
	const categorie = data.filter((item) => item.categorie === categories);

	const cours = categorie[0].cours;
	const subtitle = cours[session]?.body?.subtitle?.color;

	return (
		<div className='h-auto w-full flex items-start'>
			<SideBar
				session={session}
				setSession={setSession}
				categories={categories}
				setCategories={setCategories}
			/>
			<div className='w-full flex flex-col gap-4 justify-center items-start p-6 md:p-2'>
				<h2 className='font-semibold text-4xl md:text-2xl w-full text-center mb-6'>
					{cours[session]?.title}
				</h2>
				<h4
					className={`font-semibold text-2xl md:text-xl ${
						cours[session]?.body?.subtitle?.color ? subtitle : 'text-black'
					}`}
				>
					{cours[session]?.body?.subtitle?.txt}
				</h4>
				{cours[session].body?.text?.map((el) => (
					<div
						className='w-full flex flex-col gap-2 px-4 sm:px-5'
						key={nanoid()}
					>
						{el?.body?.map((item) => (
							<>
								{/*  TITRE DU CHAPITRE  */}
								{item?.title && (
									<h4
										className={`font-semibold text-2xl md:text-xl border-t-2 border-purple-300 pt-8 mt-3 ${
											item.title.color && item.title.color
										}`}
									>
										{item?.title.txt}
									</h4>
								)}
								{/* LISTE A PUCES */}
								{item?.isList ? (
									<li
										key={nanoid()}
										className={`py-0 pl-10 list-disc text-lg ${
											item?.bold
												? 'font-bold'
												: item?.semiBold && 'font-semibold'
										}`}
									>
										{item?.txt}
									</li>
								) : // {/* TEXTE INFO */}
								item?.info ? (
									<div
										key={nanoid()}
										className='bg-[#e8f4fd] flex justify-center items-center p-4 w-full mx-auto'
									>
										<BsInfoCircle size={30} color={'blue'} />
										<p
											className={`text-lg md:text-base pl-2 ${
												item?.bold
													? 'font-bold'
													: item?.semiBold && 'font-semibold'
											}`}
										>
											{item?.txt}
										</p>
									</div>
								) : (
									// {/* TEXTE NORMAL */}
									<p
										key={nanoid()}
										className={`text-justify md:text-left sm:text-justify text-lg md:text-base pl-2 ${
											item?.bold
												? 'font-bold'
												: item?.semiBold && 'font-semibold'
										}`}
									>
										{item?.txt}
									</p>
								)}

								{/* IMAGE */}
								{item?.img && (
									<img
										src={item?.img.src}
										alt={item?.title}
										width={item?.img.width}
										height={item?.img.height}
										className='mx-auto'
									/>
								)}
								{/* SEPARATEUR */}
								{item?.hr && (
									<hr className='border-t-2 border-slate-300 my-5' />
								)}
								{/* CODE EXAMPLE */}
								{item?.sample?.map((code) => (
									<div className='w-full mx-auto md:w-[320px]' key={nanoid()}>
										<SyntaxCode language={code?.style}>{code?.code}</SyntaxCode>
									</div>
								))}
								{/* STACKBLITZ */}
								{item?.stack && (
									<pre>
										<iframe
											title={`test`}
											src={item.stack}
											frameborder='0'
											className='h-[500px] w-full my-3'
										/>
									</pre>
								)}
							</>
						))}
					</div>
				))}
				<div className='h-[20vh]'></div>
			</div>
		</div>
	);
};

export default Feed;
