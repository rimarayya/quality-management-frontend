import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplatesRouters from '../templates/TemplatesRoutes';
import NotFoundPage from '../common/pages/errors/NotFoundPage';
import CreateTemplatePage from '../templates/pages/create/CreateTemplatePage';

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CreateTemplatePage />} />
				{/*
				 * I am still working in the project so for now there is no Home page.
				 * Once I have a Home page, I will uncomment the line below and remove the CreateTemplatePage route above.
				 * So for now, the CreateTemplatePage is set as the default route.
				 */}
				{/* <Route path="/" element={<HomePage />} /> */}
				<Route path="/templates/*" element={<TemplatesRouters />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default AppRoutes;
