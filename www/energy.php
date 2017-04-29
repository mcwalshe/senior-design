<?php
 //$day = $_GET['day'];
 //possibly rearrange day variable
/*<?php
$day = $_GET['day'];
$ch = curl_init("http://www.u.arizona.edu/~mcwalshe/srdesign/energy.php?day="+day);
$table = curl_exec($ch);
curl_close($ch);
echo $table;
?>*/
 $day = "2017-04-22.txt";
 if (file_exists($day)) {
        $file = fopen($day, "r");
        $table= "<table><th>Time</th><th>Usage(kWh)</th><th>Cost</th>";
        while ($row = fgets($file)) {
                $line = explode( " ", $row, 2);
                $table .= "<tr><td>" . $line[0] . "</td>";
                $table .= "<td>" . $line[1] . "</td>";
                $time = explode(":", $line[0], 2);
                if ( $time[0] < 14  or $time[0] > 20 ) {
                        $table .= "<td>9.85c/hr</td>";
                }
                else {
                        $table .= "<td>13.75c/hr</td>";
                }
                $table .= "</tr>";
        }
        $table .= "</table>";
        fclose($file);
 } else {
        $table = "No data found.";
}
echo $table;

?>
