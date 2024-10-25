import { useParams } from 'react-router-dom';

export default function UpdateTemplatePage() {
	const { templateId } = useParams();

	return <div>Update template page {templateId}</div>;
}
