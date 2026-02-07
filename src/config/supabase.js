import { createClient } from '@supabase/supabase-js'

// 这里需要用户手动配置API密钥
const supabaseUrl = 'https://hrhvunsodnsqvvxyhero.supabase.co'
const supabaseKey = 'sb_publishable_VD_ILV_cBRirJ6FdgHQ3TQ_tWPYY7bb'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase