import { expect } from 'chai';
import sinon from 'sinon';
import { fetchUsers, printUsers } from '../fetchUsers.js'

describe('fetchUsers', function() {
    let fetchStub;

    beforeEach(function () {
        fetchStub = sinon.stub(global, 'fetch');
    });

    afterEach(function() {
        fetchStub.restore();
    });

    it('should return users data when the API request is successful', async function () {
        const testUsers = [
            { id: 1, name: 'Leanne Graham' },
            { id: 2, name: 'Ervin Howell' },
            { id: 3, name: 'Clementine Bauch' },
            { id: 4, name: 'Patricia Lebsack' },
            { id: 5, name: 'Chelsey Dietrich' },
            { id: 6, name: 'Mrs. Dennis Schulist' },
            { id: 7, name: 'Kurtis Weissnat' },
            { id: 8, name: 'Nicholas Runolfsdottir V' },
            { id: 9, name: 'Glenna Reichert' },
            { id: 10, name: 'Clementina DuBuque' }
        ];
        fetchStub.resolves({
            ok: true,
            json: async () => testUsers,
        });
        const users = await fetchUsers();
        expect(users).to.deep.equal(testUsers);
    });

    it('should return undefined if the API request fails', async function() {
        fetchStub.rejects(new Error('Network error'));
        const users = await fetchUsers();
        expect(users).to.be.undefined;
    })
})

describe('fetchPrint', function() {
    it('should fetch and print the user data', function (done) {
        printUsers();
        done();  
    })
})