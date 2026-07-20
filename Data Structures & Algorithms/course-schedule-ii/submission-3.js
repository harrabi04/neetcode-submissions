class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let visited = new Set()
        let output = []
        let map = new Map()

        for (let i = 0; i < numCourses; i++) {
            map.set(i, []);
        }
    
        for (const [course, prereq] of prerequisites) {
            map.get(course).push(prereq);
        }

        for (const c of map.keys()) {
            if(!visited.has(c)){
                let visiting = []
                if(this.dfs(c,visited,map, visiting, new Set())){
                    output.push(...visiting)
                }else{
                    return []
                }
            }
        }

        return output
    }

    dfs(c,visited,map,visiting,cycle){
        if(cycle.has(c)) return false;
        if(visited.has(c)) return true;
        
        cycle.add(c)
        
        for(const p of map.get(c)){
            if(!this.dfs(p,visited,map,visiting,cycle)){
                return false;
            }
        }
        cycle.delete(c)
        visited.add(c)
        visiting.push(c)
        return true;
    }
}
