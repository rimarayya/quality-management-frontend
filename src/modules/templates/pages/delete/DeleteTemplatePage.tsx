import { useParams } from 'react-router-dom';

export default function DeleteTemplatePage() {
	const { templateId } = useParams();

	return <div>Delete template with id {templateId}</div>;
}
