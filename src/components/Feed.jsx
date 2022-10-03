import React from 'react';
import SyntaxCode from './SyntaxCode';
import { react } from '../constants/cours';
import { nanoid } from 'nanoid';

const Feed = ({ session }) => {
	return (
		<div className='w-full'>
			<div className='h-auto w-full flex flex-col gap-3 justify-center items-center p-5'>
				<div className='p-5 flex flex-col gap-4'>
					<h3 className='font-semibold text-4xl text-center mb-6'>
						{react[session].title}
					</h3>
					<h4 className='font-semibold text-2xl'>
						{react[session].body.intro.title}
					</h4>
					{react[session].body.intro.text.map((txt) => (
						<p key={nanoid()} className='text-justify text-lg pl-3'>
							{txt}
						</p>
					))}
					{react[session].body?.cours?.map((el, index) => (
						<div className='w-full flex flex-col gap-3' key={nanoid()}>
							{el?.title && (<h4 className='font-semibold text-2xl border-t-2 pt-8 mt-3'>{el?.title}</h4>)}
							{el?.isList
								? el?.body?.map((item) => (
									<li className='py-0 pl-10 list-disc'>{item}</li>
								))
								: el?.body?.map((item) => (
										<p key={nanoid()} className='text-justify text-lg pl-2'>
											{item}
										</p>
								  ))}
							{el?.img && (
								<img
									src={el?.img}
									alt={el?.title}
									className='h-[500px] w-[500px] mx-auto'
								/>
							)}
								{el?.sample?.map((code) => (
							<div className='w-full'>
									<SyntaxCode key={nanoid()} language={code?.style}>
										{code?.code}
									</SyntaxCode>
							</div>
								))}
							{el?.outro?.text?.map((item, index) => (
								<p key={nanoid()} className='text-justify text-lg pl-3'>
									{item}
								</p>
							))}
							{el?.outro?.sample && (
								<div className='w-full'>
									<SyntaxCode language={el?.outro?.sample?.style}>
										{el?.outro?.sample?.code}
									</SyntaxCode>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Feed;
