-- 创建断事预测表
CREATE TABLE divinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  serial_number SERIAL,
  name TEXT NOT NULL,
  gender TEXT NOT NULL,
  prediction_type TEXT NOT NULL,
  number1 INTEGER NOT NULL,
  number2 INTEGER NOT NULL,
  number3 INTEGER NOT NULL,
  email TEXT NOT NULL,
  payment_status BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

-- 创建测命预测表
CREATE TABLE life_predictions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  serial_number SERIAL,
  name TEXT NOT NULL,
  gender TEXT NOT NULL,
  year INTEGER NOT NULL,
  month INTEGER NOT NULL,
  day INTEGER NOT NULL,
  hour INTEGER NOT NULL,
  email TEXT NOT NULL,
  payment_status BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

-- 创建索引
CREATE INDEX idx_divinations_email ON divinations(email);
CREATE INDEX idx_divinations_payment_status ON divinations(payment_status);
CREATE INDEX idx_life_predictions_email ON life_predictions(email);
CREATE INDEX idx_life_predictions_payment_status ON life_predictions(payment_status);

-- 配置权限（允许anon用户访问）
ALTER TABLE divinations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon to insert" ON divinations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon to select" ON divinations FOR SELECT USING (true);

ALTER TABLE life_predictions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anon to insert" ON life_predictions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon to select" ON life_predictions FOR SELECT USING (true);
