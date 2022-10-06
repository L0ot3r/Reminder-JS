import React from 'react';
import { SyntaxCode, SideBar } from './';
import { data } from '../constants/cours';
import { nanoid } from 'nanoid';

const Feed = ({ session, categories, setSession, setCategories }) => {
	const categorie = data.filter((item) => item.categorie === categories);

	const cours = categorie[0].cours;
	const subtitle = cours[session]?.body?.subtitle?.color;

	return (
		<div className=' h-auto w-full flex items-start'>
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
						className='w-full flex flex-col gap-3 px-4 sm:px-5'
						key={nanoid()}
					>
						{/*  TITRE DU CHAPITRE  */}
						{el?.title && (
							<h4
								className={`font-semibold text-2xl md:text-xl border-t-2 border-purple-300  pt-8 mt-3 ${
									el.title.color && el.title.color
								}`}
							>
								{el?.title.txt}
							</h4>
						)}

						{/* SEPARATEUR */}
						{el?.hr && <hr className='border-t-2 border-slate-300 my-5' />}

						{el?.isList
							? el?.body?.map((item) => (
									// /* LISTE A PUCES */
									<li
										key={nanoid()}
										className={`py-0 pl-10 list-disc ${
											item?.bold && 'font-bold'
										}`}
									>
										{item?.txt}
									</li>
							  ))
							: el?.body?.map((item) => (
									// /* TEXTE NORMAL */
									<p
										key={nanoid()}
										className={`text-justify md:text-left sm:text-justify text-lg md:text-base pl-2 ${
											item?.bold && 'font-bold'
										}`}
									>
										{item?.txt}
									</p>
							  ))}
								
						{/* IMAGE */}
						{el?.img && (
							<img
								src={el?.img.src}
								alt={el?.title}
								width={el?.img.width}
								height={el?.img.height}
								className='mx-auto'
							/>
						)}

						{/* CODE EXAMPLE */}
						{el?.sample?.map((code) => (
							<div className='w-full mx-auto md:w-[320px]' key={nanoid()}>
								<SyntaxCode language={code?.style}>{code?.code}</SyntaxCode>
							</div>
						))}

						{/* STACKBLITZ */}
						{el?.stack && (
							<pre>
								<iframe
									title={`test`}
									src={el.stack}
									frameborder='0'
									className='h-[500px] w-full my-3'
								/>
							</pre>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Feed;
