import React, { useState } from 'react';
import SyntaxCode from './SyntaxCode';
import { react } from '../constants/cours';
import { nanoid } from 'nanoid';

const Feed = ({session}) => {
	

	return (
		<div className='w-full'>
			<div className='h-auto w-full flex flex-col gap-3 justify-center items-center p-5'>
				<div className='p-5 flex flex-col gap-4'>
					<h3 className='font-semibold text-2xl'>{react[session].title}</h3>
					<h4 className='font-semibold text-2xl'>{react[session].body.intro.title}</h4>
					<p className='text-justify text-lg'>{react[session].body.intro.text}</p>
					{react[session].body?.cours?.map((el, index) => (
						<div className='w-full flex flex-col gap-3' key={nanoid()}>
							<h4 className='font-semibold text-2xl'>{el.title}</h4>
							{el?.body?.map((item, index) => (
								<p key={nanoid()} className='text-justify text-lg'>
									{item}
								</p>
							))}
							<div className='w-full'>
								{el?.sample?.map(code => (
									<SyntaxCode key={nanoid()} language={code?.style}>{code?.code}</SyntaxCode>
								))}
							</div>
							{el?.outro?.text?.map((item, index) => (
								<p key={nanoid()} className='text-justify text-lg'>
									{item}
								</p>
							))}
							{el?.outro?.sample && (
								<div className='w-full'>
									<SyntaxCode language={el?.outro?.sample.style}>{el?.outro?.sample?.code}</SyntaxCode>
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
