import { useParams } from 'react-router-dom';

export default function ViewTemplatePage() {
	const { templateId } = useParams();

	return <div>View template page for {templateId}</div>;
}
