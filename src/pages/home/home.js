import { useQuery } from '@tanstack/react-query';
// import { SlidersApi } from '@/api/sliders';
import { ListCategories, FooterAppFloat, Redes, FooterApp, SearchTable, Separator } from '@/components';
import { BasicLayout } from '@/layouts';


// const slidersCtrl = new SlidersApi();

export default function HomePage() {

  return (
    <BasicLayout>
      <Redes/>
      <ListCategories />    
      <FooterApp />
      <FooterAppFloat/>
      <Separator />
    </BasicLayout>
  );
}