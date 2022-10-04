import React from 'react';
import SyntaxCode from './SyntaxCode';
import { data } from '../constants/cours';
import { nanoid } from 'nanoid';

const Feed = ({ session, categories }) => {
	const categorie = data.filter((item) => item.categorie === categories);

	const cours = categorie[0].cours;

	return (
		<div className='w-full'>
			<div className='h-auto w-full flex flex-col gap-3 justify-center items-center p-5'>
				<div className='p-5 flex flex-col gap-4'>
					<h3 className='font-semibold text-4xl text-center mb-6'>
						{cours[session]?.title}
					</h3>
					<h4 className='font-semibold text-2xl'>
						{cours[session]?.body?.subtitle}
					</h4>
					{cours[session].body?.text?.map((el) => (
						<div className='w-full flex flex-col gap-3' key={nanoid()}>
							{el?.title && (
								<h4 className='font-semibold text-2xl border-t-2 pt-8 mt-3'>
									{el?.title}
								</h4>
							)}
							{el?.isList
								? el?.body?.map((item) => (
										<li key={nanoid()} className='py-0 pl-10 list-disc'>
											{item}
										</li>
								  ))
								: el?.body?.map((item) => (
										<p key={nanoid()} className='text-justify text-lg pl-2'>
											{item}
										</p>
								  ))}
							{el?.img && (
								<img
									src={el?.img.src}
									alt={el?.title}
									width={el?.img.width}
									height={el?.img.height}
									className='mx-auto'
								/>
							)}
							{el?.sample?.map((code) => (
								<div className='w-full' key={nanoid()}>
									<SyntaxCode language={code?.style}>{code?.code}</SyntaxCode>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Feed;
