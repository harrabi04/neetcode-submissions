class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let visited = new Set()
        let map = new Map()

    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }
    
    for (const [course, prereq] of prerequisites) {
        map.get(course).push(prereq);
    }

        for(let k of map.keys()){
            if(!this.dfs(k,map,visited)) return false;
        }

        return true;
    }

    dfs(c,req,visited){
         
        if(!req.get(c).length === 0) return true;
        if(visited.has(c)){
            return false;
        }
        visited.add(c)
        for(let pr of req.get(c)){
            if (!this.dfs(pr, req, visited)) {
            return false;
        }
        }
        visited.delete(c)
        req.set(c,[])
        return true;
    
    }
}
