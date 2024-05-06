const ScratchAPI = require('../src/scratch-api');

it('getProjectMeta on shared project', async () => {
    const sharedProject = await ScratchAPI.getProjectMeta('437419376');
    expect(sharedProject.id).toBe(437419376);
    expect(sharedProject.title).toBe('Bouncing');
});

it('getProjectMeta on unshared project', async () => {
    expect.assertions(1);
    try {
        await ScratchAPI.getProjectMeta('531027641');
    } catch (e) {
        expect(e.message).toMatch('unshared');
    }
});
