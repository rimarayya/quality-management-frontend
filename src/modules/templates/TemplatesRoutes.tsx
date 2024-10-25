import { Route, Routes } from 'react-router-dom';
import TemplatesPage from './pages/TemplatesPage';
import ViewTemplatePage from './pages/ViewTemplatePage';
import UpdateTemplatePage from './pages/UpdateTemplatePage';
import CreateTemplatePage from './pages/CreateTemplatePage';
import DeleteTemplatePage from './pages/DeleteTemplatePage';
import NotFoundPage from '../common/pages/errors/NotFoundPage';

export default function TemplatesRouters() {
	return (
		<Routes>
			<Route path="/" element={<TemplatesPage />} />
			<Route path="create" element={<CreateTemplatePage />} />
			<Route path=":templateId" element={<ViewTemplatePage />} />
			<Route path=":templateId/update" element={<UpdateTemplatePage />} />
			<Route path=":templateId/delete" element={<DeleteTemplatePage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
