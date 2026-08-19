import re
import json


def create_array_wrapper(student_code: str, test_case: dict) -> str:

    input_data = test_case.get("input", "")

    numbers = re.findall(r"-?\d+", input_data)

    java_array = ", ".join(numbers)

    wrapper = f"""
import java.util.*;

{student_code}

public class Main {{

    public static void main(String[] args) {{

        int[] nums = new int[]{{{java_array}}};

        Solution solution = new Solution();

        int[] result = solution.reverse(nums);

        System.out.println(
            Arrays.toString(result)
        );
    }}
}}
"""

    return wrapper


def create_linked_list_wrapper(student_code: str, test_case: dict) -> str:

    input_data = test_case.get("input", "")

    data = json.loads(input_data)

    nodes = []

    for item in data:

        value = item[0]

        random_index = item[1]

        nodes.append(
            f"new Node({value})"
        )

    node_creation = ", ".join(nodes)

    links = ""

    for i in range(len(data) - 1):

        links += f"""
        nodes[{i}].next = nodes[{i + 1}];
"""

    random_links = ""

    for i, item in enumerate(data):

        random_index = item[1]

        if random_index is not None:

            random_links += f"""
        nodes[{i}].random = nodes[{random_index}];
"""

    wrapper = f"""
import java.util.*;

class Node {{

    int val;
    Node next;
    Node random;

    Node(int val) {{
        this.val = val;
    }}
}}

{student_code}

public class Main {{

    public static void main(String[] args) {{

        Node[] nodes = new Node[]{{{node_creation}}};

{links}

{random_links}

        Node head = nodes.length > 0
            ? nodes[0]
            : null;

        Solution solution = new Solution();

        Node result =
            solution.copyRandomList(head);

        System.out.println(
            serialize(result)
        );
    }}

    static String serialize(Node head) {{

        ArrayList<Node> list =
            new ArrayList<>();

        Node current = head;

        while (current != null) {{

            list.add(current);

            current = current.next;
        }}

        StringBuilder output =
            new StringBuilder("[");

        for (int i = 0; i < list.size(); i++) {{

            Node node = list.get(i);

            int randomIndex = -1;

            if (node.random != null) {{

                randomIndex =
                    list.indexOf(node.random);
            }}

            output.append("[");
            output.append(node.val);
            output.append(",");

            if (randomIndex == -1) {{
                output.append("null");
            }} else {{
                output.append(randomIndex);
            }}

            output.append("]");

            if (i < list.size() - 1) {{
                output.append(",");
            }}
        }}

        output.append("]");

        return output.toString();
    }}
}}
"""

    return wrapper