import { Route, Routes } from 'react-router-dom';
import TemplatesPage from './pages/TemplatesPage';
import ViewTemplatePage from './pages/view/ViewTemplatePage';
import UpdateTemplatePage from './pages/update/UpdateTemplatePage';
import CreateTemplatePage from './pages/create/CreateTemplatePage';
import DeleteTemplatePage from './pages/delete/DeleteTemplatePage';
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
