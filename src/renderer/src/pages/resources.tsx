import BasePage from '@renderer/components/base/base-page'
import GeoData from '@renderer/components/resources/geo-data'
import ProxyProvider from '@renderer/components/resources/proxy-provider'
import RuleProvider from '@renderer/components/resources/rule-provider'
import MihomoIcon from '../components/base/mihomo-icon'
const Resources: React.FC = () => {
  return (
    <BasePage title="外部资源">
      <div className="flex justify-center items-center py-3">
      <MihomoIcon className="h-10 w-10 mr-2" />
      <h3 className="text-2xl font-bold">Clash Meta For Windows</h3>
      </div>
      <GeoData />
      <ProxyProvider />
      <RuleProvider />
    </BasePage>
  )
}

export default Resources
