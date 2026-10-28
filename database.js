/* 이름·성별·생년월일시를 보내지 않습니다. 로그인 화면 없이 익명 인증을 사용합니다. */
window.CampaignDB = (() => {
  let client = null;
  let sessionPromise = null;
  async function getClient() {
    const c = window.CARBONEX_CONFIG || {};
    if (!window.supabase || !c.supabaseUrl || !c.supabasePublishableKey) return null;
    if (!client) client = window.supabase.createClient(c.supabaseUrl, c.supabasePublishableKey);
    if (!sessionPromise) sessionPromise = (async () => {
      const existing = await client.auth.getSession();
      if (existing.error) throw existing.error;
      if (!existing.data.session) {
        const auth = await client.auth.signInAnonymously();
        if (auth.error) throw auth.error;
      }
      return client;
    })().catch(e => { sessionPromise = null; throw e; });
    return sessionPromise;
  }
  async function send(name, mission) {
    const db = await getClient();
    if (!db) return false;
    const { error } = await db.rpc(name, { mission_no: mission });
    if (error) { console.warn('참여 기록을 저장하지 못했어요.', error.message); return false; }
    return true;
  }
  return {
    recordView: mission => send('record_fortune_view', mission),
    recordCompletion: mission => send('record_mission_completion', mission)
  };
})();
