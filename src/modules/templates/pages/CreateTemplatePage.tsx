import { Grid2 as Grid } from '@mui/material';
import FormBuilderSection from '../components/FormBuilderSidebar';
import FormBuilderView from '../components/FormBuilderView';

export default function CreateTemplatePage() {
	return (
		<Grid container spacing={2}>
			<Grid size={{ md: 7, lg: 8, xl: 9, xl4: 10 }}>
				<FormBuilderView />
			</Grid>

			<Grid size={{ md: 5, lg: 4, xl: 3, xl4: 2 }}>
				<FormBuilderSection />
			</Grid>
		</Grid>
	);
}
