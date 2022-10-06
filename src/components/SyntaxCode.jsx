import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import vsdarkplus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const SyntaxCode = ({ children, language }) => {
	return (
		<div className='mt-3 w-full mx-auto'>
			<SyntaxHighlighter
				language={language}
				style={vsdarkplus}
				showLineNumbers={true}
				wrapLongLines={true}
			>
				{children}
			</SyntaxHighlighter>
		</div>
	);
};

export default SyntaxCode;
