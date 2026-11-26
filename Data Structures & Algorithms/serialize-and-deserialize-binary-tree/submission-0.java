/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Codec {
    int index = 0;

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if(root == null){
            return "n,";
        }
        String v = root.val + ",";
        String serialized = v + serialize(root.left) + serialize(root.right);
        return serialized;
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] values = data.split(",");
        return build(values); 
    }

    public TreeNode build (String[] values){
        if(index >= values.length) return null;
        String value = values[index++];
        if("n".equals(value)){
            return null;
        }
        return new TreeNode(Integer.parseInt(value),build(values),build(values));
    }
}
